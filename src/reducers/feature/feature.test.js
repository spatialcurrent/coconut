import { CLEAR_FEATURE, SET_FEATURE } from 'action-types';
import featureReducer from './feature.reducer';

describe('Reducer: feature', () => {
  it('sets a feature', () => {
    const action = { feature: { id: 1 }, type: SET_FEATURE };
    const expectedState = { id: 1 };
    const state = featureReducer(null, action);
    expect(state).toEqual(expectedState);
  });

  it('clears a feature', () => {
    const action = { type: CLEAR_FEATURE };
    const initialState = { id: 1 };
    const state = featureReducer(initialState, action);
    expect(state).toEqual(null);
  });
});
