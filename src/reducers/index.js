import { combineReducers } from 'redux';
import alert from './alert';
import feature from './feature';
import notes from './notes';
import queries from './queries';
import query from './query';
import showLoader from './show-loader';
import showMenu from './show-menu';
import showQueryInfo from './show-query-info';

export default combineReducers({
  alert,
  feature,
  notes,
  queries,
  query,
  showLoader,
  showMenu,
  showQueryInfo,
});
