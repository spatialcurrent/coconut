import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import EditIcon from '@material-ui/icons/Edit';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import styles from './controls.styles.scss';

export default class Controls extends Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    openQueryInfo: PropTypes.func.isRequired,
    serviceName: PropTypes.string,
  }

  state = {
    open: false,
  };

  get downloadDisabled () {
    return !this.props.serviceName;
  }

  close () {
    this.setState({ open: false });
  }

  download () {
    window.open(`${window.API_URL}/services/${this.props.serviceName}/download.json`); // eslint-disable-line
  }

  open () {
    this.setState({ open: true });
  }

  toggle () {
    this.setState({ open: !this.state.open }); // eslint-disable-line
  }

  render () {
    return (
      <SpeedDial
        ariaLabel="Controls"
        color="secondary"
        className={styles.controls}
        direction="up"
        disabled={this.props.disabled}
        icon={<SpeedDialIcon color="secondary" />}
        onBlur={::this.close}
        onClick={::this.toggle}
        onClose={::this.close}
        onFocus={::this.open}
        onMouseEnter={::this.open}
        onMouseLeave={::this.close}
        open={this.state.open}
      >
        <SpeedDialAction
          aria-label="Info"
          icon={<EditIcon />}
          onClick={this.props.openQueryInfo}
          tooltipTitle="Query Info"
        />
        <SpeedDialAction
          aria-label="Download"
          icon={<DownloadIcon />}
          onClick={::this.download}
          tooltipTitle="Download"
        />
      </SpeedDial>
    );
  }
}
