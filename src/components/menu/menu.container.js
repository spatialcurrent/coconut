import { connect } from 'react-redux';
import openMenu from 'actions/open-menu';
import closeMenu from 'actions/close-menu';
import Menu from './menu.component';

function mapState ({ showMenu }) {
  return {
    showMenu,
  };
}

function mapDispatch (dispatch) {
  return {
    closeMenu: () => dispatch(closeMenu()),
    openMenu: () => dispatch(openMenu()),
  };
}

export default connect(mapState, mapDispatch)(Menu);
