import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import throttle from 'lodash/throttle';
import { loadState, saveState } from '../lib/local-storage';
import rootReducer from './reducers';
import asyncMiddleware from './middleware/async';

const middlewares = [thunk, asyncMiddleware, routerMiddleware(hashHistory)];

let composeEnhancers = compose;

if (__DEV__) {
  middlewares.push(logger({
    level: 'info',
    collapsed: true
  }));

  /* eslint-disable no-underscore-dangle */
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
  /* eslint-enable no-underscore-dangle */
}

const enhancers = composeEnhancers(
  applyMiddleware(...middlewares)
);

export default () => {
  const store = createStore(rootReducer, loadState(), enhancers);

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer('./reducers', require('./reducers').default); // eslint-disable-line global-require
    });
  }

  return store;
};
