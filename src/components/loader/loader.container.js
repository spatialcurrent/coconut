import { connect } from 'react-redux';
import closeLoader from 'actions/close-loader';
import Loader from './loader.component';

const mapState = ({ showLoader }) => ({
  showLoader,
});

const mapDispatch = {
  closeLoader,
};

export default connect(mapState, mapDispatch)(Loader);
