import { app, BrowserWindow, ipcMain } from 'electron';
import installExtension, { REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import is from 'electron-is';
import path from 'path';
import { format } from 'url';

let win = null;

async function createWindow() {
  win = new BrowserWindow({
    width: 208,
    height: 434,
    minWidth: 144,
    minHeight: 300,
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
})

const ipc = require('electron').ipcMain;
ipc.on('close-window', () => {
 app.quit();
});
