import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  CLOSE_LOADER,
  GET_FEATURES,
  GET_QUERY,
  OPEN_ALERT,
  OPEN_LOADER,
} from 'action-types';
import {
  mockExecuteServiceResult,
  mockGetProcessResult,
  mockGetServiceResult,
 } from 'api-client';
import getFeatures from './get-features.action';

const mockStore = configureMockStore([thunk]);
let store;

describe('Action: getFeatures', () => {
  beforeEach(() => {
    store = mockStore({
      features: null,
      query: null,
      showLoader: null,
    });
  });

  it('creates open loader, get features, get query, and close loader actions', async () => {
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

  it('creates open alert action when features return empty array', async () => {
    const params = { service: 'test-service', noFeatures: true };
    const expectedActions = [
      { type: OPEN_LOADER },
      { type: OPEN_ALERT, message: 'There were no results found for this query. Please try another query.' },
      { type: CLOSE_LOADER },
    ];

    const updatedStore = await store.dispatch(getFeatures(params));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates open alert action when recieving an error', async () => {
    const params = { servie: 'test-service', withError: true };

    const expectedActions = [
      { type: OPEN_LOADER },
      { type: OPEN_ALERT, message: 'There was a problem executing this query. We have been notified of the problem and will work to fix it.' },
      { type: CLOSE_LOADER },
    ];
  });
});
