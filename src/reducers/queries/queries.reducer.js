import uniqBy from 'lodash.uniqby';
import {
  FAVORITE_QUERY,
  LOAD_QUERIES,
  UNFAVORITE_QUERY
} from 'action-types';

const { localStorage } = window; // eslint-disable-line

export default function (state = [], { name, type, queries }) {
  switch (type) {
    case LOAD_QUERIES: {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
      return queries.map(query => ({ ...query, favorite: favorites[query.name] }));
    }
    case FAVORITE_QUERY: {
      const favoriteQuery = state.find(query => query.name === name);
      const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
      localStorage.setItem('favorites', JSON.stringify({ ...favorites, [name]: true }));
      return uniqBy([{ ...favoriteQuery, favorite: true }, ...state], query => query.name);
    }
    case UNFAVORITE_QUERY: {
      const unfavoriteQuery = state.find(query => query.name === name);
      const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
      localStorage.setItem('favorites', JSON.stringify({ ...favorites, [name]: false }));
      return uniqBy([{ ...unfavoriteQuery, favorite: false }, ...state], query => query.name);
    }
    default:
      return state;
  }
}
