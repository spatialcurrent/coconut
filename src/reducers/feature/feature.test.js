import { CLEAR_FEATURE, SET_FEATURE } from 'action-types';
import feature from './feature.reducer';

describe('reducer: feature', () => {
  it('sets a feature', () => {
    const action = { feature: { id: 1 }, type: SET_FEATURE };
    const expectedState = { id: 1 };
    const state = feature(null, action);
    expect(state).toEqual(expectedState);
  });

  it('clears a feature', () => {
    const action = { type: CLEAR_FEATURE };
    const initialState = { id: 1 };
    const state = feature(initialState, action);
    expect(state).toEqual(null);
  });
});
