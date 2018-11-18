import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  OPEN_LOADER,
  GET_QUERY,
  GET_FEATURES,
  CLOSE_LOADER,
} from 'action-types';
import {
  mockExecuteServiceResult,
  mockGetProcessResult,
  mockGetServiceResult,
 } from 'api-client';
import getFeatures from './get-features.action';

const mockStore = configureMockStore([thunk]);

describe('Action: getFeatures', () => {
  it('creates open loader, get features, get query, and close loader actions', async () => {
    const store = mockStore({
      features: null,
      query: null,
      showLoader: null,
    });

    const params = { service: 'test-service' };
    const expectedActions = [
      { type: OPEN_LOADER },
      { features: mockExecuteServiceResult, type: GET_FEATURES },
      { query: { ...mockGetProcessResult, ...mockGetServiceResult }, type: GET_QUERY },
      { type: CLOSE_LOADER }
    ];

    const updatedStore = await store.dispatch(getFeatures(params));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
