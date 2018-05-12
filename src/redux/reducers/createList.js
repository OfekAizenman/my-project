import { combineReducers } from 'redux';
import {
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE, // eslint-disable-line
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_REQUEST,
  FETCH_NOTES_FAILURE,
  ADD_NOTE_SUCCESS,
  TOGGLE_NOTE_ARCHIVE_SUCCESS,
} from '../actionsTypes';

const createList = (filter) => {
  const handleToggle = (state, action) => {
    const { result: toggledArchiveId, entities } = action.response;
    const { archive } = entities.notes[toggledArchiveId];
    const shouldRemove = (
      (archive && filter === 'all') ||
      (!archive && filter === 'archive')
    );

    return shouldRemove ?
      state.filter(id => id !== toggledArchiveId) :
      state;
  };

  const ids = (state = [], action) => {
    switch (action.type) {
      case FETCH_NOTES_SUCCESS:
        return filter === action.filter ?
          action.response.result :
          state;
      case ADD_NOTE_SUCCESS:
        return filter !== 'archive' ?
          [...state, action.response.result] :
          state;
      case TOGGLE_NOTE_ARCHIVE_SUCCESS:
        return handleToggle(state, action);
      case DELETE_NOTE_SUCCESS:
        return state.filter(id => id !== action.response.result);
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case FETCH_NOTES_REQUEST:
        return true;
      case FETCH_NOTES_SUCCESS:
      case FETCH_NOTES_FAILURE:
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case FETCH_NOTES_FAILURE:
        return action.message;
      case FETCH_NOTES_REQUEST:
      case FETCH_NOTES_SUCCESS:
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  });
};

export default createList;

export const getIds = state => state.ids;
export const getIsFetching = state => state.isFetching;
export const getErrorMessage = state => state.errorMessage;
