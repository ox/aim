import create from "zustand";
import {ipcRenderer} from "electron";

const useStore = create(set => ({
  workspaces: {},
  loading: {},
  updateWorkspace: (domain, workspaceData) => {
    return set(state => ({
      workspaces: {[domain]: workspaceData},
      loading: [],
    }));
  },
  attemptLogin: (domain, email, password, autoLogin) => {
    set(state => ({loading: {[domain]: true}}));
    return ipcRenderer.invoke('attempt-login', domain, email, password, autoLogin);
  },
}));

ipcRenderer.on('update-workspace', (event, domain, workspaceData) => {
  useStore.setState({workspaces: {[domain]: workspaceData}, loading: {[domain]: false}});
});

export default useStore;
