import { connect } from 'react-redux';
import QueryInfo from './query-info.component';

function mapState ({ query }) {
  return {
    query,
  };
}

export default connect(mapState)(QueryInfo);
