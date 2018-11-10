import React, { Component } from 'react';
import Map from 'components/map';
import NavBar from 'components/nav-bar';
import Panel from 'components/panel';
import QueryInfo from 'components/query-info';
import styles from './dashboard.styles.scss';

export default class Dashboard extends Component {
  render () {
    return (
      <div className={styles.dashboard}>
        <NavBar />
        <Panel />
        <Map />
        <QueryInfo />
      </div>
    );
  }
}
