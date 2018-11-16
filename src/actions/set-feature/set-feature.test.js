import { SET_FEATURE } from 'action-types';
import setFeature from './set-feature.action';

describe('action: setFeature', () => {
  it('creates a set feature action', () => {
    const expectedAction = { type: SET_FEATURE };
    expect(setFeature()).toEqual(expectedAction);
  });
});
