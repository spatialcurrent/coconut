import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './queries.styles.scss';

export default class Queries extends Component {
  static propTypes = {
    queries: PropTypes.array.isRequired,
  }

  get queries () {
    return this.props.queries.map(({ name }) => (
      <div className={styles.query}>
        <h3>{ name }</h3>
      </div>
    ));
  }

  render () {
    return (
      <div className={styles.queries}>
        <AppBar position="static">
          <Toolbar>
            <Typography color="inherit" variant="title">
              Select a query
            </Typography>
          </Toolbar>
        </AppBar>
        { this.queries }
      </div>
    );
  }
}
