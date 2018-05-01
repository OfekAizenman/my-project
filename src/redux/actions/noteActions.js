import { ADD_NOTE, DELETE_NOTE } from '../actionsTypes/noteActionTypes';

export const addNote = (title, description) => ({
    type: ADD_NOTE,
    title,
    description
})

export const deleteNote = (id) => ({
    type: DELETE_NOTE,
    id
})