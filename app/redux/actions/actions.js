import Types from './types';
import Words from '../../services/words';

export const createWordsAction = () => ({
  type: Types.Auth.Login,
  promise: Words.test(),
});

export default {};
