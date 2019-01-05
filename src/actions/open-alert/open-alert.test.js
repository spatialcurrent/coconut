import { OPEN_ALERT } from 'action-types';
import openAlert from './open-alert.action';

describe('Action: openAlert', () => {
  it('creates an open alert action', () => {
    const expectedAction = { message: 'alert message', type: OPEN_ALERT };
    expect(openAlert('alert message')).toEqual(expectedAction);
  });
});
