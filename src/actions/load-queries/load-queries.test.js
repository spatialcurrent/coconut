import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mockGetServicesResult } from 'api-client';
import { LOAD_QUERIES } from 'action-types';
import loadQueries from './load-queries.action';

const mockStore = configureMockStore([thunk]);

describe('Action: loadQueries', () => {
  it('creates a get query action', async () => {
    const store = mockStore({ queries: [] });
    const updatedStore = await store.dispatch(loadQueries());
    const expectedAction = {
      queries: mockGetServicesResult,
      type: LOAD_QUERIES,
    };
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
