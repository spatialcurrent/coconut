import { combineReducers } from 'redux';
import alert from './alert';
import feature from './feature';
import features from './features';
import queries from './queries';
import showLoader from './show-loader';
import showMenu from './show-menu';
import query from './query';

export default combineReducers({
  alert,
  feature,
  features,
  queries,
  query,
  showLoader,
  showMenu,
});
