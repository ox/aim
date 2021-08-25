import { app, BrowserWindow, ipcMain } from 'electron'
import { is } from 'electron-util'
import path from 'path'
import { format } from 'url'

let win = null

async function createWindow() {
  win = new BrowserWindow({
    width: 360 + 500,
    height: 630,
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

  win.webContents.openDevTools({ mode: 'right' });

  win.on('closed', () => {
    win = null
  })

  win.webContents.on('devtools-opened', () => {
    win.focus()
  })

  win.on('ready-to-show', () => {
    win.show()
    win.focus()
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (!is.macos) {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null && app.isReady()) {
    createWindow()
  }
})

const ipc = require('electron').ipcMain;
ipc.on('close-window', (event, args) => {
 console.log(args);
 app.quit();
})
