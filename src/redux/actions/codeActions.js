import * as Api from '../../api';
import { saveItem } from '../../common/utils/localStorage';

const ROUTE = Api.CODES_ROUTE;
const COLORS_ROUTE = `${ROUTE}/colors`;

// eslint-disable-next-line import/prefer-default-export
export const fetchAllColors = () => (dispatch) => {
  dispatch(Api.getAll(COLORS_ROUTE, {}, 'colors')).then(
    (response) => {
      debugger
      if (Array.isArray(response) && response[0] === 'cached') {
        return response[1];
      }
      saveItem(response.config.cacheKey, response.data.colors);
      return response.data.colors;
    },
    (error) => {
      throw new DOMException(error);
    },
  );
};
