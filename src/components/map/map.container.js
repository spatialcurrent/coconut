import { connect } from 'react-redux';
import setFeature from 'actions/set-feature';
import Map from './map.component';

function mapState ({ feature, features }) {
  return {
    feature,
    features,
  };
}

function mapDispatch (dispatch) {
  return {
    setFeature: feature => dispatch(setFeature(feature)),
  };
}

export default connect(mapState, mapDispatch)(Map);
