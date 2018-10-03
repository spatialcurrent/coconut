import { connect } from 'react-redux';
import Queries from './queries.component';

const mapStateToProps = ({ queries }) => ({
  queries: [{ name: 'hello' }, { name: 'world' }],
});

export default connect(mapStateToProps)(Queries);
