import { connect } from 'react-redux';
import favoriteQuery from 'actions/favorite-query';
import loadQueries from 'actions/load-queries';
import unfavoriteQuery from 'actions/unfavorite-query';
import Queries from './queries.component';

const mapState = ({ queries }) => ({
  queries,
});

const mapDispatch = {
  favoriteQuery,
  loadQueries,
  unfavoriteQuery,
};

export default connect(mapState, mapDispatch)(Queries);
