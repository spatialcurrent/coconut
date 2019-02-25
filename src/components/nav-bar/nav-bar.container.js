import { connect } from 'react-redux';
import openMenu from 'actions/open-menu';
import NavBar from './nav-bar.component';

const mapDispatch = {
  openMenu,
};

export default connect(null, mapDispatch)(NavBar);
