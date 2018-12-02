import { LOAD_QUERIES } from 'action-types';
import queriesReducer from './queries.reducer';

describe('Reducer: queries', () => {
  it('loads queries', () => {
    const queries = [{ id: 1 }, { id: 2 }];
    const action = { queries, type: LOAD_QUERIES };
    const state = queriesReducer(null, action);
    expect(state).toEqual(queries);
  });
});
