import { connect } from 'react-redux';
import openQueryInfo from 'actions/open-query-info';
import Controls from './controls.component';

const mapState = ({ query }) => ({
  disabled: !!query,
  serviceName: query && query.name,
});

const mapDispatch = {
  openQueryInfo,
};

export default connect(mapState, mapDispatch)(Controls);
