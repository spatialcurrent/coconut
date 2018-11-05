import React, { Component } from 'react';
import Map from 'components/map';
import NavBar from 'components/nav-bar';
import styles from './dashboard.styles.scss';

export default class Dashboard extends Component {
  render () {
    return (
      <div className={styles.dashboard}>
        <NavBar />
        <Map />
      </div>
    );
  }
}
