import { REMOVE_NOTE } from 'action-types';

export default function (id) {
  return {
    id,
    type: REMOVE_NOTE,
  };
}
