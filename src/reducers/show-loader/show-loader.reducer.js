import { CLOSE_LOADER, OPEN_LOADER } from 'action-types';

export default function (state = false, { type }) {
  switch (type) {
    case OPEN_LOADER:
      return true;
    case CLOSE_LOADER:
      return false;
    default:
      return state;
  }
}
