import React, { Component } from 'react';
import { withRouter, Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from 'components/dashboard';
import Queries from 'components/queries';
import styles from './app.styles.scss';

class App extends Component {
  get redirect () {
    if (window.location.pathname !== '/queries') { // eslint-disable-line no-undef
      return <Redirect to="/queries" />;
    }

    return null;
  }

  render () {
    return (
      <div className={styles.app}>
        <Switch>
          <Route path="/queries" component={Queries} />
          { this.redirect }
          <Route component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
