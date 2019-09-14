import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mockGetServicesResult } from 'api-client';
import { LOAD_QUERIES } from 'action-types';
import loadQueries from './load-queries.action';

const mockStore = configureMockStore([thunk]);

describe('Action: loadQueries', () => {
  let store;
  beforeEach(() => {
    store = mockStore({ queries: [] });
  });

  describe('without cached queries', () => {
    it('creates a get query action with empty results first (no cache)', async () => {
      await store.dispatch(loadQueries());
      const expectedAction = {
        queries: [],
        type: LOAD_QUERIES,
      };
      expect(store.getActions()[0]).toEqual(expectedAction);
    });

    it('creates a get query action with queries from the server second', async () => {
      await store.dispatch(loadQueries());
      const expectedAction = {
        queries: mockGetServicesResult,
        type: LOAD_QUERIES,
      };
      expect(store.getActions()[1]).toEqual(expectedAction);
    });
  });
});
