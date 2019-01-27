import { connect } from 'react-redux';
import getQuery from 'actions/get-query';
import favoriteQuery from 'actions/favorite-query';
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
    getQuery: name => dispatch(getQuery(name)),
    loadQueries: () => dispatch(loadQueries()),
    unfavoriteQuery: name => dispatch(unfavoriteQuery(name)),
  };
}

export default connect(mapState, mapDispatch)(Queries);
