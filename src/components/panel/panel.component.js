import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import styles from './panel.styles.scss';

export default class Panel extends Component {
  static propTypes = {
    clearFeature: PropTypes.func.isRequired,
    feature: PropTypes.object,
  }

  get properties () {
    const { properties } = this.props.feature;
    return Object.keys(properties).map(key => (
      <TableRow key={key}>
        <TableCell component="th" scope="row">
          { key }
        </TableCell>
        <TableCell>
          { properties[key] }
        </TableCell>
      </TableRow>
    ));
  }

  get panel () {
    return (
      <Drawer
        anchor="right"
        className={styles.panel}
        variant="permanent"
      >
        <div className={styles.top}>
          <IconButton onClick={this.props.clearFeature}>
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={styles.content}>
          <Typography variant="title">
            {`Id: ${this.props.feature.id}`}
          </Typography>
          { this.table }
        </div>
      </Drawer>
    );
  }

  get table () {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Property</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { this.properties }
        </TableBody>
      </Table>
    );
  }

  render () {
    if (this.props.feature) {
      return this.panel;
    }

    return null;
  }
}
