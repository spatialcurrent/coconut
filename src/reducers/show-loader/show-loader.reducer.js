import { CLOSE_LOADER, OPEN_LOADER } from 'action-types';

export default function (state = true, { type }) {
  switch (type) {
    case OPEN_LOADER:
      return true;
    case CLOSE_LOADER:
      return false;
    default:
      return state;
  }
}
