import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import styles from './query-info.styles.scss';

export default class QueryInfo extends Component {
  static propTypes = {
    closeQueryInfo: PropTypes.func.isRequired,
    query: PropTypes.object.isRequired,
    showQueryInfo: PropTypes.bool.isRequired,
  };

  get properties () {
    const { query } = this.props;
    if (!query) return null;

    const {
      datastore,
      description,
      expression,
      name,
      process,
      title,
    } = query;

    return (
      <Fragment>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>{title}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Description</TableCell>
          <TableCell>{description}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Datastore</TableCell>
          <TableCell>{datastore}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Process</TableCell>
          <TableCell>{process}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Service</TableCell>
          <TableCell>{name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Expression</TableCell>
          <TableCell><pre className={styles.pre}>{expression}</pre></TableCell>
        </TableRow>
      </Fragment>
    );
  }

  get table () {
    return (
      <Table className={styles.table}>
        <TableBody>
          { this.properties }
        </TableBody>
      </Table>
    );
  }

  render () {
    return (
      <Dialog open={this.props.showQueryInfo} onClose={this.props.closeQueryInfo}>
        <DialogTitle>
          <span className={styles.title}>Query Information</span>
        </DialogTitle>
        <DialogContent>
          { this.table }
        </DialogContent>
      </Dialog>
    );
  }
}
