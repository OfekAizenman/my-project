import axios from 'axios';

const BASE_URL = 'http://localhost:8000/notes/';

export function getAllNotes() {
    return axios.get(BASE_URL);
}

export function getNote(id) {
    return axios.get(`${BASE_URL}${id}`);
}

export function addNote(description, title) {
    return axios.post(BASE_URL, {
        description,
        title
    });
}

export function updateNote(description, title) {
    return axios.put(`${BASE_URL}${id}`, {
        description,
        title
    })
}

export function deleteNote(id) {
    return axios.delete(`${BASE_URL}${id}`, { data: {
        id
    }})
}