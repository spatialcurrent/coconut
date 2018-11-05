import { connect } from 'react-redux';
import Queries from './queries.component';

function mapState ({ queries }) {
  return {
    queries,
  };
}

export default connect(mapState)(Queries);
