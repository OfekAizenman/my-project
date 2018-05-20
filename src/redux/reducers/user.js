import { combineReducers } from 'redux';
import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
} from '../actionsTypes';

const initialState = {
  user: null,
  token: null,
  status: 'unauthenticated',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        status: 'login',
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        status: 'signup',
      };
    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        user: action.response.user,
        token: action.response.token,
        status: 'authenticated',
      };
    case SIGNIN_FAILURE:
    case SIGNUP_FAILURE:
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
    case SIGNUP_REQUEST:
      return true;
    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
    case SIGNIN_FAILURE:
    case SIGNUP_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case SIGNIN_FAILURE:
    case SIGNUP_FAILURE:
      return action.message;
    case SIGNIN_REQUEST:
    case SIGNUP_REQUEST:
    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  isFetching,
  errorMessage,
});

export const getUser = state => state.user;
export const getIsAuthenticated = state => state.user.status === 'authenticated';
export const getEmail = state => state.user.user && state.user.user.email;
export const getFullName = state => state.user.user &&
  `${state.user.user.first} ${state.user.user.last}`;
export const getInitials = state => state.user.user &&
  (state.user.user.first[0] + state.user.user.last[0].toUpperCase()).toUpperCase();

