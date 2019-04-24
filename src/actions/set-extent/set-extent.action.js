import { SET_EXTENT } from 'action-types';

export default function (extent) {
  return {
    extent,
    type: SET_EXTENT,
  };
}
