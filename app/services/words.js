import http from '../lib/http';

class Words {
  static test() {
    return http.get('/', {
      headers: { y: 'yo' }
    });
  }
}

export default Words;
