import { connect } from 'react-redux';
import Map from './map.component';

function mapState ({ features }) {
  return {
    features,
  };
}

export default connect(mapState)(Map);
