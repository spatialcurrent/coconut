import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';

const HIDE_DURATION = 6000;

export default class Notes extends Component {
  static propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })),
    removeNote: PropTypes.func.isRequired,
  };

  note (note) {
    return (
      <Snackbar
        action={[
          <Button
            key="ok"
            color="secondary"
            size="small"
            onClick={() => this.props.removeNote(note.id)}
          >
            Got it!
          </Button>,
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => this.props.removeNote(note.id)}
          >
            <CloseIcon />
          </IconButton>
        ]}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        autoHideDuration={HIDE_DURATION}
        key={note.id}
        message={note.message}
        onClose={() => this.props.removeNote(note.id)}
        open={note.isOpen}
      />
    );
  }

  render () {
    return (
      <Fragment>
        { this.props.notes.map(note => this.note(note)) }
      </Fragment>
    );
  }
}
