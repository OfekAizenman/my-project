// @flow

import axios from 'axios';
import { AXIOS_REQUEST } from '../redux/actionsTypes';

export const NOTES_ROUTE = '/notes';
export const USER_ROUTE = '/users';
export const CODES_ROUTE = '/codes';

export const baseConfig = {
  baseURL: 'http://localhost:8000/api',
};

export const getRequestAction = (config: {}) => ({
  type: AXIOS_REQUEST,
  config,
});

export const getAll = (url: string = '', config: {} = {}, cacheKey: string = '') => (
  getRequestAction(Object.assign({}, config, {
    method: 'get',
    url,
    cacheKey,
  }))
);

export const get = (url: string = '', config: {} = {}) => (
  getRequestAction(Object.assign({}, config, {
    method: 'get',
    url,
  }))
);

export const post = (url: string = '', data: {} = {}, config: {} = {}) => (
  getRequestAction(Object.assign({}, config, {
    method: 'post',
    url,
    data,
  }))
);

export const put = (url: string = '', data: {} = {}, config: {} = {}) => (
  getRequestAction(Object.assign({}, config, {
    method: 'put',
    url,
    data,
  }))
);

export const del = (url: string = '', config: {} = {}) => (
  getRequestAction(Object.assign({}, config, {
    method: 'delete',
    url,
  }))
);

const configureApi = (config: {} = {}) => {
  const configFinal = Object.assign({}, baseConfig, config);
  const instance = axios.create(configFinal);
  return instance;
};
export default configureApi;
