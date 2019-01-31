import { REMOVE_NOTE } from 'action-types';
import removeNote from './remove-note.action';

describe('Action: removeNote', () => {
  it('creates a remove note action', () => {
    const expectedAction = { id: 1, type: REMOVE_NOTE };
    expect(removeNote(1)).toEqual(expectedAction);
  });
});
