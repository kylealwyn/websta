import { combineReducers } from 'redux';

const words = {
  words(state = {}, {type, data, error}) {
    if (type == 'dude') {
      return state;
    }

    return state
  }
}

export default combineReducers({
  ...words,
});;
