import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import CloseIcon from '@material-ui/icons/Close';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import styles from './loader.styles.scss';

export default class Loader extends Component {
  static propTypes = {
    closeLoader: PropTypes.func.isRequired,
    showLoader: PropTypes.bool.isRequired,
  }

  render () {
    const { closeLoader, showLoader } = this.props;
    if (!showLoader) return null;

    return (
      <div className={styles.loader}>
        <Chip
          avatar={<CircularProgress size={20} />}
          label="Loading tiles"
          color="primary"
          onDelete={closeLoader}
          variant="outlined"
        />
      </div>
    );
  }
}
