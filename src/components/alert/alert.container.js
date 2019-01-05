import { connect } from 'react-redux';
import closeAlert from 'actions/close-alert';
import Alert from './alert.component';

function mapState ({ alert }) {
  return {
    alert,
  };
}

function mapDispatch (dispatch) {
  return {
    closeAlert: () => dispatch(closeAlert()),
  };
}

export default connect(mapState, mapDispatch)(Alert);
