import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  mockGetProcessResult,
  mockGetServiceResult,
} from 'api-client';
import { GET_QUERY } from 'action-types';
import getQuery from './get-query.action';

const mockStore = configureMockStore([thunk]);

describe('action: getQuery', () => {
  it('creates a get query action', async () => {
    const store = mockStore({ query: null });
    const updatedStore = await store.dispatch(getQuery('test-service'));
    const expectedAction = {
      query: { ...mockGetProcessResult, ...mockGetServiceResult },
      type: GET_QUERY
    };
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
