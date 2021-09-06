import { app, BrowserWindow, ipcMain } from 'electron';
import installExtension, { REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import is from 'electron-is';
import path from 'path';
import { format } from 'url';

import { login, boot } from "./manual";
import { openDb } from "./db";

let win = null;
let db = null;

async function createWindow() {
  win = new BrowserWindow({
    width: 100,
    height: 100,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  win.loadURL(
    format({
      pathname: path.join(__dirname, '..', 'index.html'),
      protocol: 'file',
      slashes: true,
    }),
  )

  win.webContents.openDevTools({ mode: 'detach', });

  win.on('closed', () => {
    win = null;
  })

  win.webContents.on('devtools-opened', () => {
    win.focus();
  })

  win.on('ready-to-show', () => {
    win.show();
    win.focus();
  })
}

app.whenReady().then(() => {
  return installExtension(REDUX_DEVTOOLS)
    .then(() => installExtension(REACT_DEVELOPER_TOOLS))
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err))
    .then(async () => {
      db = await openDb();
    })
    .then(createWindow);
});

app.on('window-all-closed', () => {
  if (!is.macOS()) {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null && app.isReady()) {
    createWindow()
  }
});

ipcMain.on('close-window', () => {
 app.quit();
});
ipcMain.on('resize-window', (event, width, height) => {
  let browserWindow = BrowserWindow.fromWebContents(event.sender)
  browserWindow.setSize(width,height)
});

let slackClient = null;

ipcMain.handle('init-session', async (event) => {
  const credential = await db.get(`select * from credentials where autologin = true limit 1;`);
  console.log('init-session', !!credential);
  return !!credential;
})

ipcMain.handle('attempt-login', async (event, domain, email, password, autoLogin) => {
  console.log('attempt-login', domain, email, autoLogin);
  return login(domain, email, password)
    .then(async ({ api_token, client, teamData}) => {
      await db.exec('delete from credentials where domain = :domain and email = :email;', {
        ':domain': domain,
        ':email': email,
      });

      await db.run(`insert into credentials (email, domain, token, cookie, autologin) values (:email, :domain, :token, :cookie, :autologin);`, {
        ':email': email,
        ':domain': domain,
        ':token': api_token,
        ':cookie': client.authCookies,
        ':autologin': autoLogin || false,
      });

      await db.run(`insert into workspaces (id, name, domain) values (:id, :name, :domain)`, {
        ':id': teamData.team.id,
        ':name': teamData.team.name,
        ':domain': domain,
      });

      slackClient = client;

      return {
        domain,
        workspaceData: teamData,
      };

      // event.reply('update-workspace', domain, teamData);
    })
    .catch((e) => {
      return Promise.resolve({error: 'could not log in'});
      // event.reply('update-workspace', domain, null);
    })
});
