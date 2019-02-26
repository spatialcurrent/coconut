import { connect } from 'react-redux';
import addNote from 'actions/add-note';
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
  addNote,
  clearFeature,
  closeLoader,
  openLoader,
  setFeature,
};

export default connect(mapState, mapDispatch)(Map);
