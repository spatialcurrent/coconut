import { CLOSE_ALERT } from 'action-types';
import closeAlert from './close-alert.action';

describe('Action: closeAlert', () => {
  it('creates a close alert action', () => {
    const expectedAction = { type: CLOSE_ALERT };
    expect(closeAlert()).toEqual(expectedAction);
  })
})
