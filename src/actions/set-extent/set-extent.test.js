import { SET_EXTENT } from 'action-types';
import setExtent from './set-extent.action';

describe('Action: setExtent', () => {
  it('creates a set extent action', () => {
    const extent = ['extent'];
    const expectedAction = { type: SET_EXTENT, extent };
    expect(setExtent(extent)).toEqual(expectedAction);
  });
});
