const menubar = require('menubar');

const menubarConfig = {
  height: 50,
  width: 300,
  resizable: false,
  windowPosition: 'trayLeft'
};

const mb = menubar(menubarConfig);

mb.on('ready', () => {});
mb.on('after-create-window', () => {
  if (process.env.ENV === 'development') {
    mb.window.webContents.openDevTools();
  }
});

if (process.env.ENV === 'development') {
  // eslint-disable-next-line no-console
  console.log(process.versions);
}
