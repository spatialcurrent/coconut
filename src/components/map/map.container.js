import { connect } from 'react-redux';
import clearFeature from 'actions/clear-feature';
import setFeature from 'actions/set-feature';
import Map from './map.component';

function mapState ({ feature, query }) {
  return {
    extent: query && JSON.parse(query.extent),
    feature,
    service: query ? query.name : '',
  };
}

function mapDispatch (dispatch) {
  return {
    clearFeature: () => dispatch(clearFeature()),
    setFeature: feature => dispatch(setFeature(feature)),
  };
}

export default connect(mapState, mapDispatch)(Map);
