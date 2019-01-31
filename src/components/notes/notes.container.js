import { connect } from 'react-redux';
import removeNote from 'actions/remove-note';
import Notes from './notes.component';

function mapState ({ notes }) {
  return {
    notes,
  };
}

function mapDispatch (dispatch) {
  return {
    removeNote: id => dispatch(removeNote(id)),
  };
}

export default connect(mapState, mapDispatch)(Notes);
