import { push } from 'react-router-redux';
import * as actionTypes from '../actionsTypes';
import * as Api from '../../api';

const ROUTE = Api.USER_ROUTE;
const SIGNIN = `${ROUTE}/signin`;

export const signup = formValues => (dispatch) => {
  dispatch({
    type: actionTypes.SIGNUP_REQUEST,
    formValues,
  });

  return dispatch(Api.post(ROUTE, formValues)).then(
    (response) => {
      dispatch({
        type: actionTypes.SIGNUP_SUCCESS,
        response: {
          user: response.data.user,
          token: response.data.token,
        },
      });
      dispatch(push('/'));
    },
    (error) => {
      dispatch({
        type: actionTypes.SIGNUP_FAILURE,
        message: error.message || 'Something went wrong.',
      });
    },
  );
};

export const signin = formValues => (dispatch) => {
  dispatch({
    type: actionTypes.SIGNIN_REQUEST,
    formValues,
  });

  return dispatch(Api.post(SIGNIN, formValues)).then(
    (response) => {
      dispatch({
        type: actionTypes.SIGNIN_SUCCESS,
        response: {
          user: response.data.user,
          token: response.data.token,
        },
      });
      dispatch(push('/'));
    },
    (error) => {
      dispatch({
        type: actionTypes.SIGNIN_FAILURE,
        message: error.message || 'Something went wrong.',
      });
    },
  );
};

export const logout = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOGOUT,
  });
  dispatch(push('/'));
};

export const gotoSignin = () => (dispatch) => {
  dispatch(push('/signin'));
};

export const gotoSignup = () => (dispatch) => {
  dispatch(push('/signup'));
};
