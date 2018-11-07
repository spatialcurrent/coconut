import { CLEAR_FEATURE, SET_FEATURE } from 'action-types';

export default function (state = null, { feature, type }) {
  switch (type) {
    case SET_FEATURE:
      return feature;
    case CLEAR_FEATURE:
      return null;
    default:
      return state;
  }
}
