import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  mockGetProcessResult,
  mockGetServiceResult,
} from 'api-client';
import { ADD_NOTE, GET_QUERY } from 'action-types';
import getQuery from './get-query.action';

const mockStore = configureMockStore([thunk]);

describe('Action: getQuery', () => {
  it('creates a get query action', async () => {
    const store = mockStore({ query: null });
    const updatedStore = await store.dispatch(getQuery('test-service'));
    const expectedActions = [
      {
        query: { ...mockGetProcessResult, ...mockGetServiceResult },
        type: GET_QUERY,
      },
      {
        note: {id: 'load-layer', message: 'Zoom in to view layer'},
        type: ADD_NOTE,
      }
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
