import { createStore } from 'redux';
import { loadState, saveState } from '../../utils/localStorage';
import appReducer from '../reducers';
import throttle from 'lodash/throttle';

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(appReducer);

    store.subscribe(throttle(() => {
        saveState({
            notes: store.getState().notes
        });
    }, 1000));

    return store;
}

export default configureStore;
