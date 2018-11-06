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
    clearFeature: PropTypes.func.isRequired,
    feature: PropTypes.object,
  }

  get panel () {
    return (
      <Drawer
        anchor="right"
        className={styles.panel}
        variant="permanent"
      >
        <div className={styles.top}>
          <IconButton onClick={this.props.clearFeature}>
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
    if (this.props.feature) {
      return this.panel;
    }

    return null;
  }
}
