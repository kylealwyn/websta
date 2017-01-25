import axios from 'axios';

class Http {
  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:4567',
      timeout: 5000,
    });
  }

  request(method, url, options = {}) {
    const requestConfig = Object.assign({}, {
      headers: {},
    }, options);

    if (localStorage.getItem('token')) {
      requestConfig.headers.Authorization = localStorage.getItem('token');
    }

    return this.axios({
      url,
      method,
      ...requestConfig,
    });
  }

  get(url, options = {}) {
    return this.request('get', url, options);
  }

  post(url, data, options = {}) {
    return this.request('post', url, Object.assign({}, options, data));
  }

  delete(url, options = {}) {
    return this.request('delete', url, options);
  }

  update(url, data, options = {}) {
    return this.request('put', url, Object.assign({}, options, data));
  }
}

export default new Http();
