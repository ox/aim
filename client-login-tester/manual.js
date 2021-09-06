const axios = require("axios");
const qs = require("qs");
const FormData = require('form-data');
const WebSocketClient = require('websocket').client;

const baseURL = "https://artems-work-space.slack.com/";
const wssSlackServer = "wss://wss-primary.slack.com:443/";
const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36";
const loginPayload = {
  email: "artem.titoulenko@gmail.com",
  password: "82RfZZ(cB}U6;3yYwNH;",
  remember: "on",
  signin: 1,
  redir: "",
  no_sso: 1,
};
const accept = {
  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
  "Accept-Encoding": "gzip, deflate",
  "Accept-Language": "en-US,*",
};
const sec = {
  "upgrade-insecure-requests": 1,
  "sec-ch-ua": '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
  "sec-ch-ua-mobile": "?0",
  "sec-fetch-dest": "document",
  "sec-fetch-mode": "navigate",
  "sec-fetch-site": "same-origin",
  "sec-fetch-user": "?1",
};

let authCookies = "";
let user_id;
let team_id;
let api_token;
let client;

class SlackAPI {
  constructor(baseURL, authCookies, apiToken) {
    this.baseURL = baseURL;
    this.authCookies = authCookies;
    this.apiToken = apiToken;
  }

  async call(endpoint, {query = {}, form = {}} = {}, headers = {}) {
    const getEndpoints = ["api.features", "experiments.getByUser"];
    const method = getEndpoints.includes(endpoint) ? "get" : "post";

    const formData = new FormData();
    Object.entries(form).forEach(([key, val]) => {
      formData.append(key, `${val}`);
    });
    if (Object.keys(form).length > 0) {
      formData.append("token", this.apiToken);
    }

    const res = await axios.default({
      method,
      baseURL: this.baseURL,
      url: `api/${endpoint}?${qs.stringify(query)}`,
      headers: formData.getHeaders({
        cookie: this.authCookies,
        "User-Agent": userAgent,
        ...accept,
        ...sec,
        ...headers,
      }),
      data: formData,
    });

    console.log('  ->', res.status, method, `${this.baseURL}api/${endpoint}`);
    const space = "     ";
    let indentedResponse = JSON.stringify(res.data, null, 2).split("\n");
    if (indentedResponse.length > 40) {
      const removePrefs = (o) => {
        const ret = {};
        if (!o) {
          return o;
        }
        Object.keys(o).forEach((key) => {
          if (key === "prefs") {
            ret[key] = "{ OMITTED }";
            return;
          }

          if (typeof o[key] === "object") {
            ret[key] = removePrefs(o[key]);
          } else  {
            ret[key] = o[key];
          };
        });

        return ret;
      }
      indentedResponse = JSON.stringify(removePrefs(res.data), null, 2).split("\n")
    }
    console.log(indentedResponse.map((line) => space + line).join("\n"));

    return res.data;
  }
}

const cookieArrToString = (cookies) => {
  return cookies.filter((setCookie) => !setCookie.includes("d-l"))
  .map((setCookie) => setCookie.split(";").shift())
  .join("; ")
}

async function login() {
  const initialRes = await axios.get(baseURL, {
    headers: {
      ...accept,
      "User-Agent": userAgent,
      ...sec,
    }
  });

  const initialCookies = cookieArrToString(initialRes.headers["set-cookie"]);
  const crumbEncoded = initialRes.data.match(/&quot;(s-.*?)&quot;/)[1];
  const crumb = decodeURIComponent(JSON.parse(`"${crumbEncoded}"`));
  const data = qs.stringify({ ...loginPayload, crumb });

  let res;
  try {
    await axios.post(baseURL, data, {
      headers: {
        ...accept,
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": userAgent,
        cookie: initialCookies,
        origin: null,
        "upgrade-insecure-requests": 1,
      },
      maxRedirects: 0,
    });
  } catch (e) {
    // 302 is considered a failure, smh. just continue
    if (e.response.status !== 302) {
      throw e;
    }
    res = e.response;
  }

  const loginCookies = res.headers["set-cookie"];
  if (!loginCookies.find((setCookie) => setCookie.includes("d="))) {
    console.error('no d cookie returned');
    return;
  }

  // d cookie is the auth token for requests
  authCookies = cookieArrToString(loginCookies);

  console.log('login');

  const messagesRes = await axios.get(baseURL + "/messages", {
    headers: {
      cookie: authCookies,
    },
  });

  console.log('messagesRedirect');

  user_id = messagesRes.data.match(/"user_id":"(.*?)"/)[1];
  team_id = messagesRes.data.match(/"team_id":"(.*?)"/)[1];
  api_token = messagesRes.data.match(/"api_token":"(.*?)"/)[1];

  client = new SlackAPI(baseURL, authCookies, api_token);

  const wsdata = await client.call("client.getWebSocketURL", {form:{token: api_token, _x_sonic: true}});
  return boot(client, wsdata)
}

async function boot(client, wsData) {
  console.log("boot", user_id, team_id, api_token);

  const teamData = await client.call("client.boot", {
    qs: {
      "_x_id": "noversion-1630341789.089",
      "_x_version_ts": "noversion",
      "_x_gantry": "true"
    },
    form: {
      only_self_subteams: 1,
      flannel_api_ver: 4,
      _x_reason: "deferred-data",
      include_min_version_bump_check: 1,
      version_ts: 1630335447,
      build_version_ts: 1630335447,
      _x_sonic: true,
    },
  });

  const wsClient = new WebSocketClient();

  wsClient.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
  });

  class IDGen {
    constructor() {
      this.id = 16385;
    }

    gen() {
      this.id ++;
      return this.id;
    }
  }

  wsClient.on('connect', function(connection) {
    console.log('WebSocket Client Connected');

    const idGenerator = new IDGen();

    const pingInterval = setInterval(() => {
      connection.send(JSON.stringify({type: "ping", id: idGenerator.gen()}));
    }, 15000);

    connection.on('error', function(error) {
      console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
        clearInterval(pingInterval);
    });
    connection.on('message', function(message) {
      console.log("WS->>" + message.utf8Data + "'");
      const messageData = JSON.parse(message.utf8Data);            
    });

    connection.send(JSON.stringify({
      id: idGenerator.gen(),
      subtype: "user_subscribe_request",
      type: "flannel",
      updated_ids: {
        [teamData.self.id]: Math.floor(+(new Date()) / 1000),
      },
    }));

  });

  console.log('wss connecting to', teamData.url);
  wsClient.connect(teamData.url);
}

login();
