import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
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
          { alert }
        </DialogContent>
      </Dialog>
    );
  }
}
