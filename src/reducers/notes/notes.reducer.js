import partition from 'lodash.partition';
import { ADD_NOTE, REMOVE_NOTE } from 'action-types';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, { ...action.note, isOpen: true }];
    case REMOVE_NOTE: {
      const [[note], otherNotes] = partition(state, item => item.id === action.id);
      return [...otherNotes, { ...note, isOpen: false }];
    }
    default:
      return state;
  }
}
