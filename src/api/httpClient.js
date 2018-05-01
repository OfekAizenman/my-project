import axios from 'axios';
import { handleError } from './errorHandling';

export const get = (url = '', config = {}) => {
    return axios.get(url, config).catch(handleError);
}

export const post = (url = '', data = '', config = {}) => {
    return axios.post(url, data, config).catch(handleError);
}

export const put = (url = '', data = '', config = {}) => {
    return axios.put(url, data, config).catch(handleError);
}

export const del = (url = '', config = {}) => {
    return axios.delete(url, config).catch(handleError);
}
