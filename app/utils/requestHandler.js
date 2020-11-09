const axios = require('axios');
const restConfig = require('../../rest.config');
const instance = axios.create();
instance.defaults.headers.common['Content-Type'] = 'application/json';

instance.interceptors.request.use(
  function(config) {
    return Object.assign(config, restConfig.default());
  },
  function(error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    if (response.status === 204 || response.status === 205) {
      return null;
    }
    if (response.status >= 200 && response.status < 300) {
      return { status: response.status, data: response.data };
    }
  },
  error =>
    Promise.reject({
      status: error.response.status,
      data: error.response.data,
    }),
);

/**
 *Request a URL and params do a GET request then return a Promise
 * @param {string} URL: service URL
 * @param {object} ...params
 * this request handler need authentication operation
 */
export function requestHandlerGet(url, ...params) {
  return instance.get(url, params);
}

/**
 *Request a URL and params do a POST request then return a Promise
 * @param {string} URL: service URL
 * @param {object} ...params: query parameters
 * this request handler doesn't need authentication operation
 */
export function requestHandlerPost(url, inputData = {}) {
  return instance.post(url, inputData);
}

/**
 *Request a url, method, params or data do ANY request then return a Promise
 * @param {string} url: relative url
 * @param {string} method: can be post or get
 * @param {object} params: array of query string, used when method is get
 * @param {object} data: json of body request, used when method is post
 * this request handler doesn't need authentication operation
 */
export function requestHandler(url, method, params, data) {
  return instance({
    method,
    url,
    params,
    data,
  });
}
