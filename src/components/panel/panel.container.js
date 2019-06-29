import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import clearFeature from 'actions/clear-feature';
import Panel from './panel.component';

const mapState = ({ feature }) => ({
  feature,
});

const mapDispatch = {
  clearFeature,
};

export default withRouter(connect(mapState, mapDispatch)(Panel));
