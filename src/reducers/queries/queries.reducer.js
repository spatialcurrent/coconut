import { LOAD_QUERIES } from 'action-types';

export default function (state = [], { type, queries }) {
  switch (type) {
    case LOAD_QUERIES:
      return queries;
    default:
      return state;
  }
}
