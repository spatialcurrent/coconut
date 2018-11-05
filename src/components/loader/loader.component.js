import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './loader.styles.scss';

export default class Loader extends Component {
  static propTypes = {
    closeLoader: PropTypes.func.isRequired,
    showLoader: PropTypes.bool.isRequired,
  }

  render () {
    const { closeLoader, showLoader } = this.props;

    return (
      <Dialog open={showLoader} onClose={closeLoader}>
        <DialogTitle>Loading data</DialogTitle>
        <DialogContent className={styles.content}>
          <CircularProgress size={50} />
        </DialogContent>
      </Dialog>
    );
  }
}
