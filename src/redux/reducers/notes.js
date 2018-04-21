import { ADD_NOTE, DELETE_NOTE } from '../actionsTypes/notesActionsTypes';

export function notes(state = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          title: action.title,
          description: action.description
        }
      ]
    case DELETE_NOTE:
      const index = state.findIndex(item => item.id === action.id);
      return [
          ...state.slice(0, index),
          ...state.slice(index+1)
      ]
    default:
      return state
  }
}