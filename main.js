const { app, BrowserWindow } = require('electron')
const { is } = require('electron-util')
const path = require('path')

let mainWindow

is.development &&
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('src/renderer/index.html')
  is.development &&
  mainWindow.webContents.openDevTools() &&
  require('devtron').install()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  is.macos && app.quit()
})

app.on('activate', function () {
  mainWindow === null && createWindow()
})
