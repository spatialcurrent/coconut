import { CLOSE_QUERY_INFO, OPEN_QUERY_INFO } from 'action-types';

export default function (state = false, { type }) {
  switch (type) {
    case OPEN_QUERY_INFO:
      return true;
    case CLOSE_QUERY_INFO:
      return false;
    default:
      return state;
  }
}
