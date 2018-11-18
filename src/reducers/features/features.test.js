import { CLEAR_FEATURES, GET_FEATURES } from 'action-types';
import featuresReducer from './features.reducer';

describe('Reducer: features', () => {
  it('gets features', () => {
    const features = [{ id: 1 }, { id: 2 }];
    const action = { features: features, type: GET_FEATURES };
    const state = featuresReducer(null, action);
    expect(state).toEqual(features);
  });

  it('clears features', () => {
    const initialState = [{ id: 1 }, { id: 2 }];
    const action = { type: CLEAR_FEATURES };
    const state = featuresReducer(initialState, action);
    expect(state).toEqual(null);
  });
});
