import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import styles from './nav-bar.styles.scss';

export default class NavBar extends Component {
  static propTypes = {
    openMenu: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  }

  render () {
    return (
      <AppBar className={styles.appBar} position="static">
        <Toolbar className={styles.toolbar}>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={this.props.openMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={styles.typography}
            color="inherit"
            variant="title"
          >
            { this.props.title }
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
