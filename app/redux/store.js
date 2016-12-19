import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
// import rootSaga from '../sagas';

export default (initialState) => {
  const middlewares = [
    thunk
  ]

  if (process.env.ENV === 'development') {
    middlewares.push(logger)
  }

  const enhancers = compose(
    applyMiddleware(...middlewares)
  )

  const store = createStore(rootReducer, initialState, enhancers);

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer("./reducers", require("./reducers").default)
    })
  }

  return store
};
