import { connect } from 'react-redux';
import clearFeature from 'actions/clear-feature';
import Panel from './panel.component';

const mapState = ({ feature }) => ({
  feature,
});

const mapDispatch = {
  clearFeature,
};

export default connect(mapState, mapDispatch)(Panel);
