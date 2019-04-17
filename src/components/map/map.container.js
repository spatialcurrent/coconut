import { connect } from 'react-redux';
import addNote from 'actions/add-note';
import clearFeature from 'actions/clear-feature';
import closeLoader from 'actions/close-loader';
import openLoader from 'actions/open-loader';
import setExtent from 'actions/set-extent';
import setFeature from 'actions/set-feature';
import Map from './map.component';

const mapState = ({ extent, feature, query }) => ({
  extent,
  feature,
  queryExtent: query && JSON.parse(query.extent),
  service: query ? query.name : '',
});

const mapDispatch = {
  addNote,
  clearFeature,
  closeLoader,
  openLoader,
  setExtent,
  setFeature,
};

export default connect(mapState, mapDispatch)(Map);
