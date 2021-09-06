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
  attemptLogin: (domain, email, password) => {
    ipcRenderer.send('attempt-login', domain, email, password);
    return set(state => ({loading: {[domain]: true}}));
  },
}));

ipcRenderer.on('update-workspace', (event, domain, workspaceData) => {
  useStore.setState({workspaces: {[domain]: workspaceData}, loading: {[domain]: false}});
});

export default useStore;
