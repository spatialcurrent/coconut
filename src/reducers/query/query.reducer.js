import { GET_QUERY } from 'action-types';

export default function (state = null, { type, query }) {
  switch (type) {
    case GET_QUERY:
      return query;
    default:
      return state;
  }
}
