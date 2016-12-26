import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './redux/store';
import Root from './containers/Root';
import './styles/app.global.css';
import * as actions from './redux/actions';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

store.dispatch(actions.createWordsAction());

const ROOT_ID = 'root';

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
   document.getElementById(ROOT_ID)
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NewRoot = require('./containers/Root').default; // eslint-disable-line

    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById(ROOT_ID)
    );
  });
}
