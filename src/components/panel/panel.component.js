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
import { parse, stringify } from 'utils/url';
import styles from './panel.styles.scss';

const MOBILE_WIDTH = 650;

export default class Panel extends Component {
  static propTypes = {
    clearFeature: PropTypes.func.isRequired,
    feature: PropTypes.object,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }

  get anchor () {
    if (window.outerWidth > MOBILE_WIDTH) { // eslint-disable-line
      return 'right';
    }
    return 'bottom';
  }

  get title () {
    const { feature } = this.props;
    if (feature.name) return `Name: ${feature.name}`;
    return `Id: ${feature.id}`;
  }

  get properties () {
    const { feature } = this.props;
    return Object.keys(feature)
      .filter(this.isPublicValue)
      .map(key => (
        <TableRow key={key}>
          <TableCell component="th" scope="row">
            { key }
          </TableCell>
          <TableCell>
            { this.value(key, feature[key]) }
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
          <IconButton onClick={::this.handleClose}>
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
    return key[0] !== '_' && key !== 'geometry';
  }

  handleClose () {
    const { clearFeature, history, location } = this.props;
    const urlParams = parse(location.search);
    delete urlParams.featureId;
    const search = stringify(urlParams);
    history.push({ pathname: location.pathname, search });
    clearFeature();
  }

  value (key, value) {
    if (typeof value === 'string' || value instanceof String) {
      if (value.startsWith('http://') || value.startsWith('https://')) {
        return <a title={value} href={value} className={styles.value}>{ value }</a>;
      }
      if ((key === 'website' || key === 'contact:website') && (value.startsWith('www.') || value.endsWith('.com') || value.endsWith('.org') || value.endsWith('.net'))) {
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
