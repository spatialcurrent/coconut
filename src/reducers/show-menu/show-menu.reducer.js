import { CLOSE_MENU, OPEN_MENU } from 'action-types';

export default function (state = false, { type }) {
  switch (type) {
    case OPEN_MENU:
      return true;
    case CLOSE_MENU:
      return false;
    default:
      return state;
  }
}
