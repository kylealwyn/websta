const menubar = require('menubar');

const __DEV__ = process.env.ENV === 'development'; // eslint-disable-line no-underscore-dangle

const menubarConfig = {
  height: 200,
  width: 300,
  resizable: false,
  preloadWindow: true,
  windowPosition: 'trayLeft'
};

const mb = menubar(menubarConfig);

const installExtensions = async () => {
  const installer = require('electron-devtools-installer'); // eslint-disable-line global-require

  const extensions = [
    'REACT_DEVELOPER_TOOLS',
    'REDUX_DEVTOOLS'
  ];

  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  for (const name of extensions) { // eslint-disable-line
    try {
      await installer.default(installer[name], forceDownload);
    } catch (e) {} // eslint-disable-line
  }
};

mb.on('ready', async () => {
  if (__DEV__) {
    await installExtensions();
  }
});

mb.on('after-create-window', () => {
  if (__DEV__) {
    mb.window.webContents.on('did-finish-load', () => {
      mb.window.webContents.openDevTools();
    });
  }
});
