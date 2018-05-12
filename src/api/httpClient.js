import axios from 'axios';
import { handleError } from './errorHandling';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const get = (url = '', config = {}) =>
  instance.get(url, config).catch(handleError);

export const post = (url = '', data = '', config = {}) =>
  instance.post(url, data, config).catch(handleError);

export const put = (url = '', data = '', config = {}) =>
  instance.put(url, data, config).catch(handleError);

export const del = (url = '', config = {}) =>
  instance.delete(url, config).catch(handleError);
