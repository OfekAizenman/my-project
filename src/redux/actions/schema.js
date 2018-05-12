import { schema } from 'normalizr';

// notes
export const note = new schema.Entity('notes');
export const arrayOfNotes = new schema.Array(note);

// user
export const user = new schema.Entity('users');

