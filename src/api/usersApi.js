import * as HttpClient from './httpClient';
import { BASE_URL, USER_ROUTE } from './config';

const USER_API = BASE_URL + USER_ROUTE;

export const login = values => HttpClient.post(`${USER_API}/login`, values);
export const signup = values => HttpClient.post(USER_API, values);

