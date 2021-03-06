import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect, Route, Switch } from 'react-router-dom';
import Alert from 'components/alert';
import Dashboard from 'components/dashboard';
import Loader from 'components/loader';
import Notes from 'components/notes';
import Menu from 'components/menu';
import Queries from 'components/queries';
import styles from './app.styles.scss';

export class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  state = {
    hasRedirected: false,
  }

  componentDidMount () {
    this.setState({ hasRedirected: true });
  }

  get redirect () {
    const { location } = this.props;
    const { hasRedirected } = this.state;
    if (location.pathname !== '/queries' && !hasRedirected) { // eslint-disable-line no-undef
      return <Redirect to="/queries" />;
    }

    return null;
  }

  render () {
    return (
      <div className={styles.app}>
        <Menu />
        <Alert />
        <Loader />
        <Notes />
        <Switch>
          <Route path="/queries/:query" component={Dashboard} />
          <Route path="/queries" component={Queries} />
          { this.redirect }
          <Route component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
