import React from 'react';
import { render as renderReact } from 'react-dom';
import debounce from 'debounce';
import createStore from './redux/store';
import App from './components/App';

const state = JSON.parse(localStorage.getItem('state'));
const store = createStore(state || {});

const render = (Component) => {
  renderReact(<Component {...store} />, document.getElementById('root'));
};

const saveState = debounce(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
}, 1000);

store.subscribe(saveState);

if (module.hot) {
  module.hot.accept('./components/App', function() {
    let newApp = require('./components/App').default;
    render(newApp);
  });
}

render(App)
