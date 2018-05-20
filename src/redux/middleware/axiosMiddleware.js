import { AXIOS_REQUEST } from '../actionsTypes';
import { getItem } from '../../common/utils/localStorage';

const axiosMiddleware = axiosInstance => store => next => (action) => {
  if (action.type !== AXIOS_REQUEST) {
    return next(action);
  }

  const { config } = action;
  if (config.cacheKey) {
    const cached = getItem(config.cacheKey);
    if (cached !== undefined) {
      return Promise.resolve(['cached', cached]);
    }
  }

  const { token } = store.getState().user.user;
  if (token) {
    // eslint-disable-next-line no-param-reassign
    axiosInstance.defaults.headers.common.Authorization = token;
  }
  return axiosInstance(config);
};

export default axiosMiddleware;
