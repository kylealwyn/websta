import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const words = {
  words(state = {}, { type }) {
    if (type === 'dude') {
      return state;
    }

    return state;
  },
};

export default combineReducers({
  ...words,
  routing,
});
