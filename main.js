const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Disable GPU acceleration
app.disableHardwareAcceleration();

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      webviewTag: true // Enable the use of <webview> tag
    },
    icon: path.join(__dirname, 'icon.png') // Path to your icon
  });

  mainWindow.loadFile('index.html');
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
