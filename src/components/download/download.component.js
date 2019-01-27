import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import styles from './download.styles.scss';

export default class Download extends Component {
  static propTypes = {
    service: PropTypes.string,
  };

  get disabled () {
    return !this.props.service;
  }

  download () {
    window.open(`${window.API_URL}/services/${this.props.service}/download.json`); // eslint-disable-line
  }

  render () {
    return (
      <Button
        aria-label="Download"
        className={styles.button}
        color="primary"
        disabled={this.disabled}
        onClick={::this.download}
        variant="fab"
      >
        <DownloadIcon />
      </Button>
    );
  }
}
