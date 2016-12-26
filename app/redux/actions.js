import Words from '../services/words';

export const createWordsAction = () => ({
  type: 'LOL_TYPE',
  promise: Words.test()
});
