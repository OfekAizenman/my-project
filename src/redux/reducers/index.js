import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';
import user, * as fromUser from './user';

const listByFilter = combineReducers({
  all: createList('all'),
  archive: createList('archive'),
});

const notes = combineReducers({
  user,
  byId,
  listByFilter,
  form: formReducer,
  router: routerReducer,
});

export default notes;

export const getVisibleNotes = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getNote(state.byId, id));
};

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter]);

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter]);

export const getUser = state => fromUser.getUser(state.user);
export const getIsAuthenticated = state => fromUser.getIsAuthenticated(state.user);

