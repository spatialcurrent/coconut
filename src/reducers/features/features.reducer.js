import { CLEAR_FEATURES, GET_FEATURES } from 'action-types';

export default function (state = null, { features, type }) {
  switch (type) {
    case GET_FEATURES:
      return features;
    case CLEAR_FEATURES:
      return null;
    default:
      return state;
  }
}
