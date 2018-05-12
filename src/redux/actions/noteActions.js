import { normalize } from 'normalizr';
import * as schema from './schema';
import * as actionTypes from '../actionsTypes';
import handleError from './handlers';
import * as notesApi from '../../api/notesApi';
import { getIsFetching } from '../reducers';

const axiosRequest = config => ({
  type: actionTypes.AXIOS_REQUEST,
  config,
});

export const fetchNotes = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: actionTypes.FETCH_NOTES_REQUEST,
    filter,
  });

  // return notesApi.getAllNotes(filter).then(
  return dispatch(axiosRequest({
    method: 'get',
    url: '/notes',
  })).then(
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
        error.message || 'Something went wrong.',
        { filter },
      );
    },
  );
};

export const addNote = (title, description) => (dispatch) => {
  return dispatch(axiosRequest({
    method: 'post',
    url: '/notes',
    data: {
      title,
      description,
    },
  })).then((response) => {
    dispatch({
      type: actionTypes.ADD_NOTE_SUCCESS,
      response: normalize(response.data.note, schema.note),
    });
  });
};

export const deleteNote = id => (dispatch) => {
  return dispatch(axiosRequest({
    method: 'delete',
    url: `/notes/${id}`,
  })).then(() => {
    dispatch({
      type: actionTypes.DELETE_NOTE_SUCCESS,
      response: normalize({ id }, schema.note),
    });
  });
};
