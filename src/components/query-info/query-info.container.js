import { connect } from 'react-redux';
import closeQueryInfo from 'actions/close-query-info';
import QueryInfo from './query-info.component';

const mapState = ({ showQueryInfo, query }) => ({
  query,
  showQueryInfo,
});

const mapDispatch = {
  closeQueryInfo,
};

export default connect(mapState, mapDispatch)(QueryInfo);
