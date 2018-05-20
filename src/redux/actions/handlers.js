import { push } from 'react-router-redux';
import { LOGOUT } from '../actionsTypes';

const logoutStatuses = [401];

function handleError(error, dispatch, actionType, message = 'Something went wrong.', data) {
  if (logoutStatuses.indexOf(error.response.status) > -1) {
    dispatch({
      type: LOGOUT,
    });
    dispatch(push('/login'));
  }

  const action = Object.assign({}, {
    type: actionType,
    message,
  }, ...data);

  dispatch(action);
}

export default handleError;
