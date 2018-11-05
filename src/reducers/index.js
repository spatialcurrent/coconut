import { combineReducers } from 'redux';
import queries from './queries';
import showLoader from './show-loader';
import showMenu from './show-menu';

export default combineReducers({
  queries,
  showLoader,
  showMenu,
});
