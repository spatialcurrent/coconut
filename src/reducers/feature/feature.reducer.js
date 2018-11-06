import { CLEAR_FEATURE, SET_FEATURE } from 'action-types';

export default function (state = null, action) {
  switch (action.type) {
    case SET_FEATURE:
      return action.data;
    case CLEAR_FEATURE:
      return null;
    default:
      return state;
  }
}
