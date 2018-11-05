import { connect } from 'react-redux';
import closeLoader from 'actions/close-loader';
import Loader from './loader.component';

function mapState ({ showLoader }) {
  return {
    showLoader,
  };
}

function mapDispatch (dispatch) {
  return {
    closeLoader: () => dispatch(closeLoader()),
  };
}

export default connect(mapState, mapDispatch)(Loader);
