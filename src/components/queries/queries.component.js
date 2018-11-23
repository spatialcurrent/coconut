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
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './queries.styles.scss';

export default class Queries extends Component {
  static propTypes = {
    getFeatures: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    loadQueries: PropTypes.func.isRequired,
    queries: PropTypes.array.isRequired,
  }

  componentDidMount () {
    const { loadQueries, queries } = this.props;
    if (!queries.length) {
      loadQueries();
    }
  }

  get queries () {
    const { getFeatures } = this.props;
    return this.props.queries
      .sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        if (aTitle < bTitle) { return -1; }
        if (aTitle > bTitle) { return 1; }
        return 0;
      })
      .map(({ datastore, description, service, title }) => (
        <Card key={service} className={styles.query}>
          <CardHeader
            action={
              (
                <IconButton aria-label="Add to favorites">
                  <FavoriteIcon />
                </IconButton>
              )
            }
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
          { this.queries }
        </div>
      </Dialog>
    );
  }
}
