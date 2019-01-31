import { ADD_NOTE } from 'action-types';

export default function (note) {
  return {
    note,
    type: ADD_NOTE,
  };
}
