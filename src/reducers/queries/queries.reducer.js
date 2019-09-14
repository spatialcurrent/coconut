import uniqBy from 'lodash.uniqby';
import storage from 'utils/storage';
import {
  FAVORITE_QUERY,
  LOAD_QUERIES,
  UNFAVORITE_QUERY
} from 'action-types';

export default function (state = [], { name, type, queries }) {
  switch (type) {
    case LOAD_QUERIES: {
      const favorites = storage.get('favorites', {});
      return queries.map(query => ({ ...query, favorite: favorites[query.name] }));
    }
    case FAVORITE_QUERY: {
      const favoriteQuery = state.find(query => query.name === name);
      const favorites = storage.get('favorites', {});
      storage.set('favorites', { ...favorites, [name]: true });
      return uniqBy([{ ...favoriteQuery, favorite: true }, ...state], query => query.name);
    }
    case UNFAVORITE_QUERY: {
      const unfavoriteQuery = state.find(query => query.name === name);
      const favorites = storage.get('favorites', {});
      storage.set('favorites', { ...favorites, [name]: false });
      return uniqBy([{ ...unfavoriteQuery, favorite: false }, ...state], query => query.name);
    }
    default:
      return state;
  }
}
