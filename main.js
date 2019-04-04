const { app, BrowserWindow } = require('electron')
const { is } = require('electron-util')
const { autoUpdater } = require('electron-updater')
const path = require('path')

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true

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

autoUpdater.setFeedURL('http://192.168.101.18:8080')
app.on('ready', () => {
  createWindow()
  autoUpdater.checkForUpdatesAndNotify()
})

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('window-all-closed', function () {
  is.macos && app.quit()
})

app.on('activate', function () {
  mainWindow === null && createWindow()
})
