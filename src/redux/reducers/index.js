import { combineReducers } from 'redux';
import notes, * as fromNotes from './notes';

const app = combineReducers({
    notes
});

export default app;

export const getVisibleNotes = (state, filter) =>
    fromNotes.getVisibleNotes(state.notes, filter);