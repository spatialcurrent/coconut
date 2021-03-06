import { OPEN_MENU } from 'action-types';
import openMenu from './open-menu.action';

describe('Action: openMenu', () => {
  it('creates an open menu action', () => {
    const expectedAction = { type: OPEN_MENU };
    expect(openMenu()).toEqual(expectedAction);
  });
});
