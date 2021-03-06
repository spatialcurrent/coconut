import { CLOSE_MENU } from 'action-types';
import closeMenu from './close-menu.action';

describe('Action: closeMenu', () => {
  it('creates a close menu action', () => {
    const expectedAction = { type: CLOSE_MENU };
    expect(closeMenu()).toEqual(expectedAction);
  })
})
