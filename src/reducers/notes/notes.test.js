import { ADD_NOTE, REMOVE_NOTE } from 'action-types';
import notesReducer from './notes.reducer';

describe('Reducer: notes', () => {
  it('adds note', () => {
    const note = { id: 1 };
    const action = { note, type: ADD_NOTE };
    const expectedState = [{ id: 1, isOpen: true }];
    const state = notesReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });

  it('removes note', () => {
    const initialState = [{ id: 1, isOpen: true}, { id: 2, isOpen: true }];
    const expectedState = [{ id: 2, isOpen: true }, { id: 1, isOpen: false }];
    const action = { id: 1, type: REMOVE_NOTE };
    const state = notesReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
