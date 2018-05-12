import { AXIOS_REQUEST } from '../actionsTypes';
import { handleError } from '../../api/instance';

const axiosMiddleware = axiosInstance => store => next => (action) => {
  if (action.type !== AXIOS_REQUEST) {
    return next(action);
  }

  const { config } = action;
  const { token } = store.getState().user.user;
  if (token) {
    // eslint-disable-next-line no-param-reassign
    axiosInstance.defaults.headers.common.Authorization = token;
  }
  return axiosInstance(config);
};

export default axiosMiddleware;
