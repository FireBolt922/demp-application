import axios from 'axios';
import * as customLocalStorage from '../storage/customLocalStorage';

class ApiError extends Error {
  /**
   * @param {string} message
   * @param {number} [status = 0]
   */
  constructor(message, status) {
    super();

    /**
     * @type {string}
     * @readonly
     */
    this.message = message;

    /**
     * @type {number}
     * @readonly
     */
    this.status = status;

    /**
     * @type {string}
     * @readonly
     */
    this.name = this.constructor.name;

    /**
     * @type {string}
     * @readonly
     */
    this.stack = ApiError.createStack(this);
  }

  /**
   * @return {string}
   */
  toString() {
    return this.getPrettyMessage();
  }

  /**
   * @return {string}
   */
  getPrettyMessage() {
    return `${this.message} Status: ${this.status}.`;
  }

  /**
   * @param {ApiError} error
   * @return {string}
   * @private
   */
  static createStack(error) {
    return typeof Error.captureStackTrace === 'function'
      ? Error.captureStackTrace(error, error.constructor)
      : new Error().stack;
  }
}

/**
 * Makes a GET request to the specified endpoint.
 *
 * @param {String} url the endpoint
 * @param {Object} params the query parameters
 * @param {boolean} overwriteBaseUrl to overwrite the base url
 */

export function get(url, params = {}, overwriteBaseUrl = false) {
  const endpoint = overwriteBaseUrl
    ? url
    : process.env.REACT_APP_ENERLLY_BASE_API_URL + url;
  const urlWithParams = new URL(endpoint, window.location.origin);

  urlWithParams.search = new URLSearchParams(params);

  return axios
    .get(urlWithParams.href, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((data) => {
      throw new ApiError(data.response.data, data.response.status);
    });
}

/**
 * Makes a POST request to the specified endpoint with the body as JSON.
 *
 * @param {String} url the endpoint
 * @param {Object} body the POST body
 * @param {Object} params the query parameters
 * @param {boolean} overwriteBaseUrl to overwrite the base url
 */
export function post(url, body, params = {}, overwriteBaseUrl = false) {
  const endpoint = overwriteBaseUrl
    ? url
    : process.env.REACT_APP_ENERLLY_BASE_API_URL + url;
  const urlWithParams = new URL(endpoint, window.location.origin);

  urlWithParams.search = new URLSearchParams(params);

  return axios
    .post(urlWithParams.href, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((data) => {
      throw new ApiError(data.response.data, data.response.status);
    });
}
/**
 * Makes a PATCH request to the specified endpoint with the body as JSON.
 *
 * @param {String} url the endpoint
 * @param {Object} body the POST body
 * @param {Object} params the query parameters
 * @param {boolean} overwriteBaseUrl to overwrite the base url
 */
export function patch(url, body, params = {}, overwriteBaseUrl = false) {
  const endpoint = overwriteBaseUrl
    ? url
    : process.env.REACT_APP_ENERLLY_BASE_API_URL + url;
  const urlWithParams = new URL(endpoint, window.location.origin);

  urlWithParams.search = new URLSearchParams(params);

  return axios
    .patch(urlWithParams.href, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((data) => {
      throw new ApiError(data.response.data, data.response.status);
    });
}
/**
 * Makes a PUT request to the specified endpoint with the body as JSON.
 *
 * @param {String} url the endpoint
 * @param {Object} body the POST body
 * @param {Object} params the query parameters
 * @param {boolean} overwriteBaseUrl to overwrite the base url
 */
export function put(url, body, params = {}, overwriteBaseUrl = false) {
  const endpoint = overwriteBaseUrl
    ? url
    : process.env.REACT_APP_ENERLLY_BASE_API_URL + url;
  const urlWithParams = new URL(endpoint, window.location.origin);

  urlWithParams.search = new URLSearchParams(params);

  return axios
    .put(urlWithParams.href, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((data) => {
      throw new ApiError(data.response.data, data.response.status);
    });
}

/**
 * Makes a DELETE request to the specified endpoint.
 *
 * @param {String} url the endpoint
 * @param {Object} params the query parameters
 * @param {boolean} overwriteBaseUrl to overwrite the base url
 */

export function deleteAPI(
  url,
  body = {},
  params = {},
  overwriteBaseUrl = false,
) {
  const endpoint = overwriteBaseUrl
    ? url
    : process.env.REACT_APP_ENERLLY_BASE_API_URL + url;
  const urlWithParams = new URL(endpoint, window.location.origin);

  urlWithParams.search = new URLSearchParams(params);

  return axios
    .delete(urlWithParams.href, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
    })
    .then((response) => response)
    .catch((data) => {
      throw new ApiError(data.response.data, data.response.status);
    });
}

function requestInterceptor(config) {
  const requestConfig = { ...config };
  const userToken = customLocalStorage
    .getItem('userToken', '', 'str')
    .replaceAll('"', '');
  if (userToken) {
    requestConfig.headers.common = {
      ...requestConfig.headers.common,
      Authorization: `Token ${userToken}`,
    };
  }
  return requestConfig;
}

axios.interceptors.request.use(
  (config) => requestInterceptor(config),
  (error) => Promise.reject(error),
);
