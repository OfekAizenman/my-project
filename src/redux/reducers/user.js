import { combineReducers } from 'redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actionsTypes';

const initialState = {
  user: null,
  token: null,
  status: 'unauthenticated',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        status: 'login',
      };
    case LOGIN_SUCCESS:
      return {
        user: action.response.user,
        token: action.response.token,
        status: 'authenticated',
      };
    case LOGIN_FAILURE:
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return true;
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case LOGIN_FAILURE:
      return action.message;
    case LOGIN_REQUEST:
    case LOGIN_SUCCESS:
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
