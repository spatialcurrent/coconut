import { CLOSE_LOADER, OPEN_LOADER } from 'action-types';
import showLoaderReducer from './show-loader.reducer';

describe('reducer: showLoader', () => {
  it('opens the loader', () => {
    const action = { type: OPEN_LOADER };
    const state = showLoaderReducer(false, action);
    expect(state).toEqual(true);
  });

  it('closes the loader', () => {
    const action = { type: CLOSE_LOADER };
    const state = showLoaderReducer(true, action);
    expect(state).toEqual(false);
  });
});
