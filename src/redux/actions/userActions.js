import { normalize } from 'normalizr';
import { push } from 'react-router-redux';
import * as schema from './schema';
import * as actionTypes from '../actionsTypes';
import * as usersApi from '../../api/usersApi';

const axiosRequest = config => ({
  type: actionTypes.AXIOS_REQUEST,
  config,
});

export const login = formValues => (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_REQUEST,
    formValues,
  });

  return dispatch(axiosRequest({
    method: 'post',
    url: '/users/login',
    data: formValues,
  })).then(
    (response) => {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        response: {
          user: response.data.user,
          token: response.data.token,
        },
      });
      dispatch(push('/'));
    },
    (error) => {
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        message: error.message || 'Something went wrong.',
      });
    },
  );
};

export const signup = formValues => (dispatch) => {
  dispatch({
    type: actionTypes.SIGNUP_REQUEST,
    formValues,
  });

  return dispatch(axiosRequest({
    method: 'post',
    url: '/users',
    data: formValues,
  })).then(
    (response) => {
      debugger
      dispatch({
        type: actionTypes.SIGNUP_SUCCESS,
        response: normalize(response.data, schema.user),
      });
    },
    (error) => {
      dispatch({
        type: actionTypes.SIGNUP_FAILURE,
        message: error.message || 'Something went wrong.',
      });
    },
  );
};
