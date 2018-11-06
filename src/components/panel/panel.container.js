import { connect } from 'react-redux';
import clearFeature from 'actions/clear-feature';
import Panel from './panel.component';

function mapState ({ feature }) {
  return {
    feature,
  };
}

function mapDispatch (dispatch) {
  return {
    clearFeature: () => dispatch(clearFeature()),
  };
}

export default connect(mapState, mapDispatch)(Panel);
