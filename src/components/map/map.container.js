import { connect } from 'react-redux';
import clearFeature from 'actions/clear-feature';
import setFeature from 'actions/set-feature';
import Map from './map.component';

const mapState = ({ feature, query }) => ({
  extent: query && JSON.parse(query.extent),
  feature,
  service: query ? query.name : '',
});

const mapDispatch = {
  clearFeature,
  setFeature,
};

export default connect(mapState, mapDispatch)(Map);
