import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import styles from './panel.styles.scss';

export default class Panel extends Component {
  static propTypes = {
    closePanel: PropTypes.func.isRequired,
    showPanel: PropTypes.bool.isRequired,
  }

  get panel () {
    return (
      <Drawer
        anchor="right"
        className={styles.panel}
        variant="permanent"
      >
        <div className={styles.top}>
          <IconButton onClick={this.props.closePanel}>
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography className={styles.content}>
          This is where all of the info on a selected feature will go...
        </Typography>
      </Drawer>
    );
  }

  render () {
    if (this.props.showPanel) {
      return this.panel;
    }

    return null;
  }
}
