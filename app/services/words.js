import http from '../lib/http';

class Words {
  test() {
    return http.get('/', {
      headers: { y: 'yo' }
    });
  }
}

export default new Words();
