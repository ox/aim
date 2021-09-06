import React, {useState, useEffect} from "react";
import {Redirect} from "react-router-dom";

import { ipcRenderer } from "electron";

const Checker = () => {
  const [redirectLocation, setRedirectLocation] = useState(null); 
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    ipcRenderer.invoke('init-session')
      .then((hasCredential) => {
        if (hasCredential) {
          setRedirectLocation('/buddies')
        } else {
          setRedirectLocation('/signin');
        }
        setLoading(false);
      })
  }, []);

  if (loading) {
    return 'loading...';
  }

  return (
    <Redirect to={redirectLocation} />
  );
}

export default Checker;
