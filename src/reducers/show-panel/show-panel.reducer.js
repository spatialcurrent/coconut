import { CLOSE_PANEL, OPEN_PANEL } from 'action-types';

export default function (state = false, { type }) {
  switch (type) {
    case OPEN_PANEL:
      return true;
    case CLOSE_PANEL:
      return false;
    default:
      return state;
  }
}
