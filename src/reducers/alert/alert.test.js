import { CLOSE_ALERT, OPEN_ALERT } from 'action-types';
import alertReducer from './alert.reducer';

describe('Reducer: alert', () => {
  it('displays the alert', () => {
    const action = { message: 'alert message', type: OPEN_ALERT };
    const state = alertReducer(false, action);
    expect(state).toEqual('alert message');
  });

  it('closes the alert', () => {
    const action = { type: CLOSE_ALERT };
    const state = alertReducer(true, action);
    expect(state).toEqual(false);
  });
});
