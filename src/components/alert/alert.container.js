import { connect } from 'react-redux';
import closeAlert from 'actions/close-alert';
import Alert from './alert.component';

const mapState = ({ alert }) => ({
  alert,
});

const mapDispatch = {
  closeAlert,
};

export default connect(mapState, mapDispatch)(Alert);
