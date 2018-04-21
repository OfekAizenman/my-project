import { ADD_NOTE, DELETE_NOTE } from '../actionsTypes/notesActionsTypes';

export function addNote(title, description) {
    return { type: ADD_NOTE, title, description }
}

export function deleteNote(id) {
    return { type: DELETE_NOTE, id }
}