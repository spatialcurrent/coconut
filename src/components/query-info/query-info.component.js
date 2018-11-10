import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import styles from './query-info.styles.scss';

export default class QueryInfo extends Component {
  static propTypes = {
    query: PropTypes.object,
  };

  state = {
    open: false,
  }

  get disabled () {
    return !this.props.query;
  }

  get properties () {
    const { query } = this.props;
    if (!query) return null;

    const {
      datastore,
      description,
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
      </Fragment>
    );
  }

  get table () {
    return (
      <Table>
        <TableBody>
          { this.properties }
        </TableBody>
      </Table>
    );
  }

  render () {
    return (
      <Fragment>
        <Button
          aria-label="Info"
          className={styles.button}
          color="secondary"
          disabled={this.disabled}
          onClick={() => this.setState({ open: true })}
          variant="fab"
        >
          <EditIcon />
        </Button>
        <Dialog open={this.state.open} onClose={() => this.setState({ open: false })}>
          <DialogTitle>Query Information</DialogTitle>
          <DialogContent className={styles.content}>
            { this.table }
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}
