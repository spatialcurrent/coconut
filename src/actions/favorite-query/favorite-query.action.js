import { FAVORITE_QUERY } from 'action-types';

export default function (name) {
  return {
    name,
    type: FAVORITE_QUERY,
  };
}
