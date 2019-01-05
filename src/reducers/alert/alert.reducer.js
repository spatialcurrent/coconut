import { CLOSE_ALERT, OPEN_ALERT } from 'action-types';

export default function (state = false, { message, type }) {
  switch (type) {
    case OPEN_ALERT:
      return message;
    case CLOSE_ALERT:
      return false;
    default:
      return state;
  }
}
