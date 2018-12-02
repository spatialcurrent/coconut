import { connect } from 'react-redux';
import favoriteQuery from 'actions/favorite-query';
import getFeatures from 'actions/get-features';
import loadQueries from 'actions/load-queries';
import unfavoriteQuery from 'actions/unfavorite-query';
import Queries from './queries.component';

function mapState ({ queries }) {
  return {
    queries,
  };
}

function mapDispatch (dispatch) {
  return {
    favoriteQuery: name => dispatch(favoriteQuery(name)),
    getFeatures: service => dispatch(getFeatures({ service })),
    loadQueries: () => dispatch(loadQueries()),
    unfavoriteQuery: name => dispatch(unfavoriteQuery(name)),
  };
}

export default connect(mapState, mapDispatch)(Queries);
