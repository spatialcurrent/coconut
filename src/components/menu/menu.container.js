import { connect } from 'react-redux';
import openMenu from 'actions/open-menu';
import closeMenu from 'actions/close-menu';
import Menu from './menu.component';

const mapState = ({ showMenu }) => ({
  showMenu,
});

const mapDispatch = {
  closeMenu,
  openMenu,
};

export default connect(mapState, mapDispatch)(Menu);
