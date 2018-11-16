import { connect } from 'react-redux';
import getFeatures from 'actions/get-features';
import loadQueries from 'actions/load-queries';
import Queries from './queries.component';

function mapState ({ queries }) {
  return {
    queries,
  };
}

function mapDispatch (dispatch) {
  return {
    getFeatures: service => dispatch(getFeatures({ service })),
    loadQueries: () => dispatch(loadQueries()),
  };
}

export default connect(mapState, mapDispatch)(Queries);
