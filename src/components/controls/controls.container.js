import { connect } from 'react-redux';
import openQueryInfo from 'actions/open-query-info';
import Controls from './controls.component';

function mapState ({ query }) {
  return {
    disabled: !!query,
    serviceName: query && query.name,
  };
}

function mapDispatch (dispatch) {
  return {
    openQueryInfo: () => dispatch(openQueryInfo()),
  };
}

export default connect(mapState, mapDispatch)(Controls);
