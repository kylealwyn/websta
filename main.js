var menubar = require('menubar')
var axios = require('axios')
var mb = menubar({
  height: 200,
  width: 400,
  preloadWindow: true,
  resizable: false
})

mb.on('ready', function ready () {
  console.log('app is ready')
})

mb.on('after-create-window', () => {
  // axios.get('http://localhost:4567')
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
})
