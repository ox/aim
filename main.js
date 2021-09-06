import { app, BrowserWindow, ipcMain } from 'electron';
import installExtension, { REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import is from 'electron-is';
import path from 'path';
import { format } from 'url';

import { login } from "./manual.js";

let win = null;

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

ipcMain.on('attempt-login', (event, domain, email, password) => {
  login(domain, email, password)
    .then((teamData) => {
      event.reply('update-workspace', domain, teamData);
    })
});
