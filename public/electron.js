const { app, BrowserWindow, shell, dialog, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
const isDev = require('electron-is-dev');
const path = require('path');
const fs = require('fs');

let mainWindow;
let updater;
let appUpdater = {
  enabled: false,
};
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1276,
    minWidth: 800,
    height: 820,
    // titleBarStyle: 'hidden',
    backgroundColor: '#F8F9FA',
    webPreferences: {
      // nodeIntegration: false,
      // contextIsolation: true,
      // preload: path.join(__dirname, 'preload.js'), // use a preload script
      preload: path.resolve(__dirname, './preload.js'),
      nodeIntegration: false,
    },
  });
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  mainWindow.webContents.send('hi', 'ok');
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

// autoUpdater.logger = require('electron-log');
// autoUpdater.logger.transports.file.level = 'info';

// autoUpdater.on('checking-for-update', () => {
//   console.log('Checking for updates...');
// });

// autoUpdater.on('update-available', info => {
//   console.log('Update available');
//   console.log('version', info.version);
//   console.log('Release date', info.releaseDate);
// });

// autoUpdater.on('update-not-available', () => {
//   console.log('Update not available');
// });

// autoUpdater.on('download-progress', progress => {
//   console.log(`Progress ${Math.floor(progress.percent)}`);
// });

// autoUpdater.on('update-downloaded', info => {
//   console.log('Update downloaded');
//   autoUpdater.quitAndInstall();
// });

// autoUpdater.on('error', error => {
//   console.log(error);
// });

app.on('ready', () => {
  if (!isDev) {
    autoUpdater.checkForUpdates();
  }
  sendStatusToWindow('Hello');
});

//-------------------------------------------------------------------
// Auto updates
//-------------------------------------------------------------------

const log = require('electron-log');

// configure logging
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');

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
  dialog.showMessageBox(
    {
      type: 'info',
      title: `Update available. Version: ${info.version}`,
      message: `New Update Found. You can manaullay download it
        Release Date: ${info.releaseDate}
        Changelog:
        ${info.releaseNotes}
        `,
      buttons: ['Download Now', 'No'],
    },
    buttonIndex => {
      if (buttonIndex === 0) {
        shell.openExternalSync(
          'https://github.com/MuttakinHasib/Al-Quran/releases'
        );
      } else {
        appUpdater.enabled = true;
      }
    }
  );
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
    )}% (${progressObj.transferred} + '/' + ${progressObj.total} + )`
  );
  dialog.showMessageBox({
    type: 'info',
    title: 'Downloading new version',
    message: `Download speed: ${
      progressObj.bytesPerSecond / 1024
    }KB/s - Downloaded ${Math.floor(progressObj.percent)}% (${
      progressObj.transferred
    } / ${progressObj.total})`,
  });
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
