import { OPEN_QUERY_INFO } from 'action-types';
import openQueryInfo from './open-query-info.action';

describe('Action: openQueryInfo', () => {
  it('creates an open query info action', () => {
    const expectedAction = { type: OPEN_QUERY_INFO };
    expect(openQueryInfo()).toEqual(expectedAction);
  });
});
