import { connect } from 'react-redux';
import removeNote from 'actions/remove-note';
import Notes from './notes.component';

const mapState = ({ notes }) => ({
  notes,
});

const mapDispatch = {
  removeNote,
};

export default connect(mapState, mapDispatch)(Notes);
