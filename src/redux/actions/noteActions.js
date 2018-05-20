import { normalize } from 'normalizr';
import * as schema from './schema';
import * as actionTypes from '../actionsTypes';
import handleError from './handlers';
import { getIsFetching } from '../reducers';
import * as Api from '../../api';

const ROUTE = Api.NOTES_ROUTE;

export const fetchNotes = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: actionTypes.FETCH_NOTES_REQUEST,
    filter,
  });

  return dispatch(Api.getAll(ROUTE)).then(
    (response) => {
      dispatch({
        type: actionTypes.FETCH_NOTES_SUCCESS,
        filter,
        response: normalize(response.data.notes, schema.arrayOfNotes),
      });
    },
    (error) => {
      handleError(
        error,
        dispatch,
        actionTypes.FETCH_NOTES_FAILURE,
        error.message,
        { filter },
      );
    },
  );
};

export const addNote = (title, description) => (dispatch) => {
  return dispatch(Api.post(ROUTE, {
    title,
    description,
  })).then((response) => {
    dispatch({
      type: actionTypes.ADD_NOTE_SUCCESS,
      response: normalize(response.data.note, schema.note),
    });
  });
};

export const deleteNote = id => (dispatch) => {
  return dispatch(Api.del(`${ROUTE}/${id}`))
    .then(() => {
      dispatch({
        type: actionTypes.DELETE_NOTE_SUCCESS,
        response: normalize({ id }, schema.note),
      });
    });
};

