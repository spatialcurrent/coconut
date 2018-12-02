import { FAVORITE_QUERY } from 'action-types';
import favoriteQuery from './favorite-query.action';

describe('Action: favoriteQuery', () => {
  it('creates an favorite query action', () => {
    const name = 'query 1';
    const expectedAction = { name, type: FAVORITE_QUERY };
    expect(favoriteQuery(name)).toEqual(expectedAction);
  });
});
