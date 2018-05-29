// @flow

import * as HttpClient from './httpClient';
import { BASE_URL, NOTES_ROUTE } from './config';

const NOTES_API = BASE_URL + NOTES_ROUTE;

export const getAllNotes = () => HttpClient.get(NOTES_API);

export const getNote = (id: string) => {
  const noteApi = `${NOTES_API}/${id}`;
  return HttpClient.get(noteApi);
};

export const addNote = (description: ?string, title: ?string) => (
  HttpClient.post(NOTES_API, {
    description,
    title,
  })
);

export const deleteNote = (id: string) => {
  const noteApi = `${NOTES_API}/${id}`;
  return HttpClient.del(noteApi);
};
