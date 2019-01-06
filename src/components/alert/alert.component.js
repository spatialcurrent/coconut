import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './alert.styles.scss';

export default class Loader extends Component {
  static propTypes = {
    alert: PropTypes.bool.isRequired,
    closeAlert: PropTypes.func.isRequired,
  }

  render () {
    const { alert, closeAlert } = this.props;

    return (
      <Dialog open={!!alert} onClose={closeAlert}>
        <DialogTitle>Oops</DialogTitle>
        <DialogContent className={styles.content}>
          <DialogContentText>
            { alert }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={closeAlert} color="primary">
            Got it
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
