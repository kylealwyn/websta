import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux';
import firebase from 'firebase/app';
import 'firebase/database';
import configureStore from './redux/store';
import Root from './containers/Root';
import './styles/app.global.scss';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

const ROOT_ID = 'root';

const folders = [{
  type: 'folder',
  name: 'views',
  children: [{
    type: 'folder',
    name: 'partials',
    children: [{
      type: 'file',
      name: 'index.js'
    }]
  }]
}, {
  type: 'folder',
  name: 'react',
  children: [{
    type: 'file',
    name: 'yo'
  }]
}]

firebase.initializeApp({
  apiKey: "AIzaSyAiGF7WGNBU7kU5SdNb3BzWTEKNb53gSVU",
  authDomain: "snippy-765f5.firebaseapp.com",
  databaseURL: "https://snippy-765f5.firebaseio.com"
})

const refs = {
  folders: firebase.database().ref('folders'),
  files: firebase.database().ref('files')
};

refs.folders.orderByChild('user_id').equalTo(123).once('value').then(folders => {
  folders.forEach(folder => {
    console.log(folder.val())
    refs.files.orderByChild('parent').equalTo(folder.key).once('value').then(file => {
      if (file.exists()) {
        console.log(file.val()) 
      }
    })
  })
})
// refs.folders.remove()
// refs.files.remove()

// const addThings = (things, parent) => {
//   if (!things || !things.length) {
//     return;
//   }

//   const thing = things.shift();
//   const { children } = Object.assign({}, thing);
//   delete thing.children;
//   if (parent) {
//     thing.parent = parent;
//   }

//   if (thing.type === 'folder') {
//     delete thing.type;
//     refs.folders.push(thing).then(res => {
//       if (children) {
//         addThings(children, res.key)
//       } else {
//         addThings(things);
//       }
//     })
//   } else if (thing.type === 'file') {
//     delete thing.type;
//     refs.files.push(thing).then(res => {
//       addThings(things);
//     })
//   }
// }

// addThings(folders)

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
   document.getElementById(ROOT_ID),
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NewRoot = require('./containers/Root').default; // eslint-disable-line

    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById(ROOT_ID),
    );
  });
}
