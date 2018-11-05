import { combineReducers } from 'redux';
import queries from './queries';
import showLoader from './show-loader';
import showMenu from './show-menu';
import showPanel from './show-panel';

export default combineReducers({
  queries,
  showLoader,
  showMenu,
  showPanel,
});
