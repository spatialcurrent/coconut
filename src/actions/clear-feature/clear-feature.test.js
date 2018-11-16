import { CLEAR_FEATURE } from 'action-types';
import clearFeature from './clear-feature.action';

describe('action: clearFeature', () => {
  it('creates a clear feature action', () => {
    const expectedAction = { type: CLEAR_FEATURE };
    expect(clearFeature()).toEqual(expectedAction);
  });
});
