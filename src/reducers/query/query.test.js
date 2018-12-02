import { GET_QUERY } from 'action-types';
import queryReducer from './query.reducer';

describe('Reducer: query', () => {
  it('gets query', () => {
    const query = { id: 1 };
    const action = { query, type: GET_QUERY };
    const state = queryReducer(null, action);
    expect(state).toEqual(query);
  });
});
