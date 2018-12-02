import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './queries.styles.scss';

export default class Queries extends Component {
  static propTypes = {
    favoriteQuery: PropTypes.func.isRequired,
    getFeatures: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    loadQueries: PropTypes.func.isRequired,
    queries: PropTypes.array.isRequired,
    unfavoriteQuery: PropTypes.func.isRequired,
  }

  componentDidMount () {
    const { loadQueries, queries } = this.props;
    if (!queries.length) {
      loadQueries();
    }
  }

  get cards () {
    const { getFeatures } = this.props;
    return this.queries.map(({ favorite, name, title, datastore, description, service }) => (
      <Card key={service} className={styles.query}>
        <CardHeader
          action={this.iconButton(name, favorite)}
          title={title}
          subheader=""
          component="h2"
        />
        <CardContent className={styles.queryContent}>
          <Typography component="h3">
            { `Data Store: ${datastore}` }
          </Typography>
          <Typography component="p">
            { description }
          </Typography>
        </CardContent>
        <CardActions>
          <Link className={styles.link} to="/">
            <Button
              size="small"
              color="primary"
              onClick={() => getFeatures({ service })}
            >
              Use query
            </Button>
          </Link>
        </CardActions>
      </Card>
    ));
  }

  get queries () {
    return this.props.queries.sort((a, b) => {
      if (a.favorite && !b.favorite) return -1;
      if (b.favorite && !a.favorite) return 1;
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      if (aTitle < bTitle) { return -1; }
      if (aTitle > bTitle) { return 1; }
      return 0;
    });
  }

  iconButton (name, favorite) {
    return (
      <IconButton
        aria-label="Toggle favorite"
        color={favorite ? 'secondary' : 'default'}
        onClick={() => this.toggleFavorite(name, favorite)}
      >
        <FavoriteIcon />
      </IconButton>
    );
  }

  handleClose () {
    this.props.history.push('/');
  }

  toggleFavorite (name, favorite) {
    const { favoriteQuery, unfavoriteQuery } = this.props;
    if (favorite) {
      unfavoriteQuery(name);
    } else {
      favoriteQuery(name);
    }
  }

  render () {
    return (
      <Dialog
        fullScreen
        onClose={this.handleClose}
        open
      >
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={::this.handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Select a query
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={styles.queries}>
          { this.cards }
        </div>
      </Dialog>
    );
  }
}
