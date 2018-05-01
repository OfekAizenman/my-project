import { ADD_NOTE, DELETE_NOTE } from '../actionsTypes/noteActionTypes';

const notes = (state = [], action) => {
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

export default notes;

export const getVisibleNotes = (state, filter) => {
  switch (filter) {
    case 'all': 
      return state;
    case 'archived':
      return state.filter(n => n.archived);
    case 'active':
      return state.filter(n => !n.archived);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
}