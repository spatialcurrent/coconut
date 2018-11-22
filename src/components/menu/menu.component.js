import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import links from './links';
import styles from './menu.styles.scss';

export default class Menu extends Component {
  static propTypes = {
    closeMenu: PropTypes.func.isRequired,
    openMenu: PropTypes.func.isRequired,
    showMenu: PropTypes.bool.isRequired,
  }

  get links () {
    return links.map(({ to, text }) => {
      if (to.startsWith('http')) {
        return (
          <a key={text} href={to}>
            <ListItem button>
              <ListItemText primary={text} />
            </ListItem>
            <Divider />
          </a>
        );
      }
      return (
        <Link key={text} to={to}>
          <ListItem button>
            <ListItemText primary={text} />
          </ListItem>
          <Divider />
        </Link>
      );
    });
  }

  render () {
    const { closeMenu, openMenu, showMenu } = this.props;
    return (
      <SwipeableDrawer
        open={showMenu}
        onClose={closeMenu}
        onOpen={openMenu}
      >
        <div
          className={styles.menu}
          onClick={closeMenu}
          onKeyDown={closeMenu}
          role="button"
          tabIndex={0}
        >
          <List>
            { this.links }
          </List>
        </div>
      </SwipeableDrawer>
    );
  }
}
