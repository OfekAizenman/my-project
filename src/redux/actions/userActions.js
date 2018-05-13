import { normalize } from 'normalizr';
import { push } from 'react-router-redux';
import * as schema from './schema';
import * as actionTypes from '../actionsTypes';
import * as Api from '../../api';

const ROUTE = Api.USER_ROUTE;
const LOGIN = `${ROUTE}/login`;

export const login = formValues => (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_REQUEST,
    formValues,
  });

  return dispatch(Api.post(LOGIN, formValues)).then(
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

  return dispatch(Api.post(ROUTE, formValues)).then(
    (response) => {
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
