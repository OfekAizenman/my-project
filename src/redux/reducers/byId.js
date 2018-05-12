import { omit } from 'lodash';
import * as actionTypes from '../actionsTypes';

const byId = (state = {}, action) => {
  if (action.type === actionTypes.DELETE_NOTE_SUCCESS) {
    return omit(state, action.response.result);
  }

  if (action.response && action.response.entities) {
    return {
      ...state,
      ...action.response.entities.notes,
    };
  }
  return state;
};

export default byId;

export const getNote = (state, id) => state[id];
