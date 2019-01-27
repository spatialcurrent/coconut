import { connect } from 'react-redux';
import Download from './download.component';

function mapState ({ query }) {
  return {
    service: query && query.name,
  };
}

export default connect(mapState)(Download);
