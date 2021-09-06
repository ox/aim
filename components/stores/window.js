import create from "zustand";
import {ipcRenderer} from "electron";

const useStore = create(set => ({
  title: '',
  width: 0,
  height: 0,
  setTitle: (newTitle) => set(state => ({title: newTitle})),
  setWindowSize: (width, height) => {
    ipcRenderer.send('resize-window', width, height);
    return set(state => ({width, height}));
  },
}));

export default useStore;
