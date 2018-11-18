import { CLOSE_LOADER } from 'action-types';
import closeLoader from './close-loader.action';

describe('Action: closeLoader', () => {
  it('creates a close loader action', () => {
    const expectedAction = { type: CLOSE_LOADER };
    expect(closeLoader()).toEqual(expectedAction);
  })
})
