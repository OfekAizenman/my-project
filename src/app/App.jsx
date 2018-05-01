// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from './appBar';
import Drawer from './drawer';
import Main from './main';
import { Notes } from '../pages';
import { drawerWidth } from '../globals/variables';
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
  }
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
                    <Main />
                </div>
            </div>
        )
    }
}

App.propTypes = propTypes;
export default withStyles(styles)(App);