import { OPEN_LOADER } from 'action-types';
import openLoader from './open-loader.action';

describe('action: openLoader', () => {
  it('creates an open loader action', () => {
    const expectedAction = { type: OPEN_LOADER };
    expect(openLoader()).toEqual(expectedAction);
  });
});
