import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import styles from './loader.styles.scss';

export default class Loader extends Component {
  static propTypes = {
    closeLoader: PropTypes.func.isRequired,
    showLoader: PropTypes.bool.isRequired,
  }

  state = {
    completed: 0,
  }

  componentDidMount () {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      this.setState({ completed: 0 });
    } else {
      const diff = Math.random() * 10;
      this.setState({ completed: Math.min(completed + diff, 100) });
    }
  }

  render () {
    const { closeLoader, showLoader } = this.props;

    return (
      <Dialog open={showLoader} onClose={closeLoader}>
        <DialogTitle>Searching ...</DialogTitle>
        <DialogContent className={styles.content}>
          <LinearProgress variant="determinate" value={this.state.completed} />
        </DialogContent>
      </Dialog>
    );
  }
}
