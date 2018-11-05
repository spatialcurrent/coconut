import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './queries.styles.scss';

export default class Queries extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    queries: PropTypes.array.isRequired,
  }

  get queries () {
    return this.props.queries.map(({ id, name }) => (
      <div key={id} className={styles.query}>
        <h3>{ name }</h3>
      </div>
    ));
  }

  handleClose () {
    this.props.history.push('/');
  }

  transition (props) {
    return <Slide direction="up" {...props} />;
  }

  render () {
    return (
      <Dialog
        fullScreen
        onClose={this.handleClose}
        open
        TransitionComponent={::this.transition}
      >
        <AppBar>
          <Toolbar>
            <IconButton color="inherit" onClick={::this.handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Select a query
            </Typography>
          </Toolbar>
        </AppBar>
        { this.queries }
      </Dialog>
    );
  }
}
