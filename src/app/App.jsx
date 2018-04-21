// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from './appbar';
import Drawer from './drawer';
import Notes from '../pages';
import { drawerWidth } from '../../globals/variables';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  content: {
    backgroundColor: theme.palette.background.default,
    height: 'calc(100% - 56px)',
    width: `calc(100% - ${drawerWidth}px)`,
    marginTop: 56,
    marginLeft: `${drawerWidth}px`,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

const propTypes = {
  classes: PropTypes.object.isRequired,
}

class App extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar />
                    <Drawer />
                    <main className={classes.content}>
                      <Notes />
                    </main>
                </div>
            </div>
        )
    }
}

App.propTypes = propTypes;
export default withStyles(styles)(App);