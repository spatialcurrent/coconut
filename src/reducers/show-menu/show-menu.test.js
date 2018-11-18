import { CLOSE_MENU, OPEN_MENU } from 'action-types';
import showMenuReducer from './show-menu.reducer';

describe('Reducer: showMenu', () => {
  it('opens menu', () => {
    const action = { type: OPEN_MENU };
    const state = showMenuReducer(false, action);
    expect(state).toEqual(true);
  });

  it('closes menu', () => {
    const action = { type: CLOSE_MENU };
    const state = showMenuReducer(true, action);
    expect(state).toEqual(false);
  });
});
