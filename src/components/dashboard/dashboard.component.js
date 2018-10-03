import React, { Component } from 'react';
import Map from 'components/map';
import styles from './dashboard.styles.scss';

export default class Dashboard extends Component {
  render () {
    return (
      <div className={styles.dashboard}>
        <Map />
      </div>
    );
  }
}
