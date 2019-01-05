import { OPEN_ALERT } from 'action-types';

export default function (message) {
  return {
    message,
    type: OPEN_ALERT,
  };
}
