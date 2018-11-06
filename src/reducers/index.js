import { combineReducers } from 'redux';
import feature from './feature';
import features from './features';
import queries from './queries';
import showLoader from './show-loader';
import showMenu from './show-menu';

export default combineReducers({
  feature,
  features,
  queries,
  showLoader,
  showMenu,
});
