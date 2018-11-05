import { connect } from 'react-redux';
import openMenu from 'actions/open-menu';
import NavBar from './nav-bar.component';

function mapDispatch (dispatch) {
  return {
    openMenu: () => dispatch(openMenu()),
  };
}

export default connect(null, mapDispatch)(NavBar);
