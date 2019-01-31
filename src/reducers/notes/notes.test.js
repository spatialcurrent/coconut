import { ADD_NOTE, REMOVE_NOTE } from 'action-types';
import notesReducer from './notes.reducer';

describe('Reducer: notes', () => {
  it('adds note', () => {
    const note = { id: 1 };
    const action = { note, type: ADD_NOTE };
    const state = notesReducer(undefined, action);
    expect(state).toEqual([note]);
  });

  it('removes note', () => {
    const initialState = [{ id: 1 }, { id: 2 }];
    const action = { id: 1, type: REMOVE_NOTE };
    const state = notesReducer(initialState, action);
    expect(state).toEqual([{ id: 2 }]);
  });
});
