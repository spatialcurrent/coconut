import { CLOSE_QUERY_INFO, OPEN_QUERY_INFO } from 'action-types';
import showQueryInfo from './show-query-info.reducer';

describe('Reducer: showQueryInfo', () => {
  it('opens query info', () => {
    const action = { type: OPEN_QUERY_INFO };
    const state = showQueryInfo(false, action);
    expect(state).toEqual(true);
  });

  it('closes query info', () => {
    const action = { type: CLOSE_QUERY_INFO };
    const state = showQueryInfo(true, action);
    expect(state).toEqual(false);
  });
});
