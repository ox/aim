import React, {useState, useEffect} from "react";
import {Redirect} from "react-router-dom";
import { ipcRenderer } from "electron";

import useWorkspacesStore from "./stores/workspaces";

const Checker = () => {
  const [redirectLocation, setRedirectLocation] = useState(null); 
  const [loading, setLoading] = useState(true);
  const {updateWorkspace} = useWorkspacesStore();

  useEffect(() => {
    ipcRenderer.invoke('init-session')
      .then((hasCredential) => {
        if (hasCredential) {
          const {domain, workspaceData} = hasCredential;
          updateWorkspace(domain, workspaceData);
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
