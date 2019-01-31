import { CLOSE_QUERY_INFO } from 'action-types';
import closeQueryInfo from './close-query-info.action';

describe('Action: closeQueryInfo', () => {
  it('creates a close query info action', () => {
    const expectedAction = { type: CLOSE_QUERY_INFO };
    expect(closeQueryInfo()).toEqual(expectedAction);
  });
});
