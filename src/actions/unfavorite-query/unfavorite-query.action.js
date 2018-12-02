import { UNFAVORITE_QUERY } from 'action-types';

export default function (name) {
  return {
    name,
    type: UNFAVORITE_QUERY,
  };
}
