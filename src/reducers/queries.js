import { LOAD_QUERIES } from 'constants/actions';

export default function (state = [], action) {
  switch (action.type) {
    case LOAD_QUERIES:
      return action.queries;
    default:
      return state;
  }
}
