import * as HttpClient from './httpClient';
import { BASE_URL, NOTES_ROUTE } from './config';

const NOTES_API = BASE_URL + NOTES_ROUTE;

export const getAllNotes = () => {
    return HttpClient.get(NOTES_API);
}

export const getNote = (id) => {
    const noteApi = `${NOTES_API}/${id}`;
    return HttpClient.get(noteApi);
}

export const addNote = (description, title) => {
    return HttpClient.post(NOTES_API, {
        description,
        title
    });
}

export const deleteNote = (id) => {
    const noteApi = `${NOTES_API}/${id}`;
    return HttpClient.del(noteApi);
}

// export const deleteNote = (id) => {
//     const noteApi = `${NOTES_API}/${id}`;
//     return HttpClient.delete(noteApi, { data: {
//             id
//         }});
// }