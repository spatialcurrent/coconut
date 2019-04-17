import { SET_EXTENT } from 'action-types';

export default function (state = null, { extent, type }) {
  switch (type) {
    case SET_EXTENT:
      return extent;
    default:
      return state;
  }
}
