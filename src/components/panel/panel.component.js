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

const MOBILE_WIDTH = 650;

export default class Panel extends Component {
  static propTypes = {
    clearFeature: PropTypes.func.isRequired,
    feature: PropTypes.object,
  }

  get anchor () {
    if (window.outerWidth > MOBILE_WIDTH) { // eslint-disable-line
      return 'right';
    }
    return 'bottom';
  }

  get title () {
    const { feature } = this.props;
    if (feature.properties && feature.properties.name) {
      return `Name: ${feature.properties.name}`;
    }

    return `Id: ${feature.id}`;
  }

  get properties () {
    const { properties } = this.props.feature;
    return Object.keys(properties)
      .filter(this.isPublicValue)
      .map(key => (
        <TableRow key={key}>
          <TableCell component="th" scope="row">
            { key }
          </TableCell>
          <TableCell>
            { this.value(key, properties[key]) }
          </TableCell>
        </TableRow>
      ));
  }

  get panel () {
    return (
      <Drawer
        anchor={this.anchor}
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
          <Typography
            color="textPrimary"
            component="h1"
            variant="title"
          >
            { this.title }
          </Typography>
          { this.table }
        </div>
      </Drawer>
    );
  }

  get table () {
    return (
      <Table className={styles.table}>
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

  isPublicValue (key) {
    return key[0] !== '_';
  }

  value (key, value) {
    if (typeof value === 'string' || value instanceof String) {
      if (value.startsWith('http://') || value.startsWith('https://')) {
        return <a title={value} href={value} className={styles.value}>{ value }</a>;
      }
      if ((key === 'website' || key === 'contact:website') && value.startsWith('www.')) {
        return <a title={value} href={`http://${value}`} className={styles.value}>{ value }</a>;
      }
      if ((key === 'email' || key === 'contact:email') && value.indexOf('@') > 0) {
        return <a title={value} href={`mailto:${value}`} className={styles.value}>{ value }</a>;
      }
      if (key === 'phone' || key === 'phone_1' || key === 'fax' || key === 'contact:phone') {
        return <a title={value} href={`tel:${value}`} className={styles.value}>{ value }</a>;
      }
      if (key === 'wikidata' || key === 'brand:wikidata') {
        return <a title={value} href={`https://www.wikidata.org/wiki/${value}`} className={styles.value}>{ value }</a>;
      }
      if (key === 'wikipedia' || key === 'brand:wikipedia') {
        const i = value.indexOf(':');
        if (i >= 0) {
          const language = value.substr(0, i);
          const article = value.substr(i + 1);
          return <a title={value} href={`https://${language}.wikipedia.org/wiki/${article}`} className={styles.value}>{ value }</a>;
        }
        return <a title={value} href={`https://en.wikipedia.org/wiki/${value}`} className={styles.value}>{ value }</a>;
      }
      if (key === 'opening_hours') {
        if (value.includes(';')) {
          return value.split(';')
            .map(line => line.replace(new RegExp('-', 'g'), ' - '))
            .map(line => (
              <div className={styles.value}>{line}</div>
            ));
        }
        return value.replace(new RegExp('-', 'g'), ' - ');
      }
      if (key === 'cuisine') {
        if (value.includes(';')) {
          return value.split(';').map(line => (
            <div className={styles.value}>{line}</div>
          ));
        }
      }
    }
    return value;
  }

  render () {
    if (this.props.feature) {
      return this.panel;
    }

    return null;
  }
}
