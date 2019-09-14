import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NavBar from 'components/nav-bar';

export default class About extends Component {
  render () {
    return (
      <Paper>
        <NavBar title="About Coconut" />
        <Container maxWidth="md">
          <Typography variant="body1" color="inherit">
            Welcome to Coconut, a lightning fast website for flexible user-driven geographic search over OpenStreetMap data.
          </Typography>
          <Typography variant="subheader1" color="inherit">Additional resources</Typography>

        </Container>
      </Paper>
    );
  }
}
