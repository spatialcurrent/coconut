import { connect } from 'react-redux';
import closeQueryInfo from 'actions/close-query-info';
import QueryInfo from './query-info.component';

function mapState ({ showQueryInfo, query }) {
  return {
    query,
    showQueryInfo,
  };
}

function mapDispatch (dispatch) {
  return {
    closeQueryInfo: () => dispatch(closeQueryInfo()),
  };
}

export default connect(mapState, mapDispatch)(QueryInfo);
