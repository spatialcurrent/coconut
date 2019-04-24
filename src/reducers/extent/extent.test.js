import { SET_EXTENT } from 'action-types';
import extentReducer from './extent.reducer';

describe('Reducer: extent', () => {
  it('sets a extent', () => {
    const action = { extent: 'extent', type: SET_EXTENT };
    const expectedState = 'extent';
    const state = extentReducer(null, action);
    expect(state).toEqual(expectedState);
  });
});
