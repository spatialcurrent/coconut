import { UNFAVORITE_QUERY } from 'action-types';
import unfavoriteQuery from './unfavorite-query.action';

describe('Action: unfavoriteQuery', () => {
  it('creates an unfavorite query action', () => {
    const name = 'query 1';
    const expectedAction = { name, type: UNFAVORITE_QUERY };
    expect(unfavoriteQuery(name)).toEqual(expectedAction);
  });
});
