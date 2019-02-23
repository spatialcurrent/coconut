import { connect } from 'react-redux';
import clearFeature from 'actions/clear-feature';
import closeLoader from 'actions/close-loader';
import openLoader from 'actions/open-loader';
import setFeature from 'actions/set-feature';
import Map from './map.component';

const mapState = ({ feature, query }) => ({
  extent: query && JSON.parse(query.extent),
  feature,
  service: query ? query.name : '',
});

const mapDispatch = {
  clearFeature,
  closeLoader,
  openLoader,
  setFeature,
};

export default connect(mapState, mapDispatch)(Map);
