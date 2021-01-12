const { app, BrowserWindow, shell, dialog } = require('electron');
const { autoUpdater } = require('electron-updater');
const isDev = require('electron-is-dev');
const path = require('path');
// const fs = require('fs');

let mainWindow;
// let appUpdater = {
//   enabled: false,
// };
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1276,
    minWidth: 800,
    height: 820,
    titleBarStyle: process.platform !== 'darwin' ? 'hiddenInset' : 'none',
    backgroundColor: '#F8F9FA',
    webPreferences: {
      // contextIsolation: true,
      // preload: path.join(__dirname, 'preload.js'), // use a preload script
      preload: path.resolve(__dirname, './preload.js'),
      nodeIntegration: true,
    },
  });
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
}

app.whenReady().then(createWindow);

// mainWindow.webContents.send('pong', 'Hello!');
// ipcMain.on('toMain', (event, args) => {
//   fs.readFile('path/to/file', (error, data) => {
//     // Do something with file contents

//     // Send result back to renderer process
//     mainWindow.webContents.send('fromMain', 'hi');
//   });
// });

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

app.on('ready', () => {
  if (!isDev) {
    autoUpdater.checkForUpdates();
  }
});

//-------------------------------------------------------------------
// Auto updates
//-------------------------------------------------------------------

const log = require('electron-log');

// configure logging
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';

const sendStatusToWindow = text => {
  log.info(text);
  if (mainWindow) {
    mainWindow.webContents.send('message', text);
  }
};

autoUpdater.on('checking-for-update', () => {
  sendStatusToWindow('Checking for update...');
});
autoUpdater.on('update-available', info => {
  sendStatusToWindow(
    `Update available. Version: ${info.version} Release Date: ${info.releaseDate}`
  );
  dialog.showMessageBox({
    type: 'info',
    title: `Update available.`,
    message: `New Update Found. Updating to Version: ${info.version}
        Release Date: ${info.releaseDate}
        `,
  });
  dialog.showMessageBox({
    type: 'warning',
    title: `Updating to Version: ${info.version}`,
    message: `Don't close your application while updating`,
  });
});
autoUpdater.on('update-not-available', info => {
  sendStatusToWindow('Update not available.');
});
autoUpdater.on('error', err => {
  sendStatusToWindow(`Error in auto-updater: ${err.toString()}`);
});
autoUpdater.on('download-progress', progressObj => {
  sendStatusToWindow(
    `Download speed: ${progressObj.bytesPerSecond} - Downloaded ${Math.floor(
      progressObj.percent
    )}%`
  );
});
autoUpdater.on('update-downloaded', info => {
  sendStatusToWindow('Update downloaded; will install now');
});

autoUpdater.on('update-downloaded', info => {
  // Wait 5 seconds, then quit and install
  // In your application, you don't need to wait 500 ms.
  // You could call autoUpdater.quitAndInstall(); immediately
  autoUpdater.quitAndInstall();
});
