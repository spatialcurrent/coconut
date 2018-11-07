import { SET_FEATURE } from 'action-types';

export default function (feature) {
  return {
    feature,
    type: SET_FEATURE,
  };
}
