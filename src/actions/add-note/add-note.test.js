import { ADD_NOTE } from 'action-types';
import addNote from './add-note.action';

describe('Action: addNote', () => {
  it('creates an add note action', () => {
    const expectedAction = { note: { id: 1 }, type: ADD_NOTE };
    expect(addNote({ id: 1 })).toEqual(expectedAction);
  });
});
