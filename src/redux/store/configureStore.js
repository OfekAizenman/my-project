import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import axiosRequest from '../middleware/axiosMiddleware';
import configureApi from '../../api';
import appReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const configureStore = (history) => {
  const historyMiddleware = routerMiddleware(history);

  const middleware = [thunk, axiosRequest(configureApi()), historyMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  const persistedReducer = persistReducer(persistConfig, appReducer);

  return createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
};

export default () => {
  const history = createHistory();
  const store = configureStore(history);
  const persistor = persistStore(store);
  return { store, persistor, history };
};
