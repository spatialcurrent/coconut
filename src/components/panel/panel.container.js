import { connect } from 'react-redux';
import closePanel from 'actions/close-panel';
import Panel from './panel.component';

function mapState({ showPanel }) {
  return {
    showPanel,
  };
}

function mapDispatch (dispatch) {
  return {
    closePanel: () => dispatch(closePanel()),
  };
}

export default connect(mapState, mapDispatch)(Panel);
