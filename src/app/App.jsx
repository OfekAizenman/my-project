// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './appBar';
import Drawer from './drawer';
import Snackbar from './snackbar';
import Main from './main';
import getRoutes from '../common/routes';
import { getIsAuthenticated } from '../redux/reducers';


type Props = {
  classes: {
    appFrame: {},
    mainUnConnected: {},
  },
  isAuthenticated: boolean,
};

type State = {
  drawerOpen: boolean,
  snackbarOpen: boolean,
};

class App extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: true,
      snackbarOpen: false,
    };

    (this: any).handleDrawerToggleOpen = this.handleDrawerToggleOpen.bind(this);
    (this: any).handleSnackbarClose = this.handleSnackbarClose.bind(this);
    (this: any).handleSnackbarOpen = this.handleSnackbarOpen.bind(this);
  }

  handleDrawerToggleOpen(): void {
    this.setState(prevState => ({
      drawerOpen: !prevState.drawerOpen,
    }));
  }

  handleSnackbarClose(): void {
    this.setState({ snackbarOpen: false });
  }

  handleSnackbarOpen(): void {
    this.setState({ snackbarOpen: true });
  }

  render() {
    const { classes, isAuthenticated } = this.props;
    const { drawerOpen, snackbarOpen } = this.state;

    const routes = getRoutes(isAuthenticated);

    const AuthorizedApp = (
      <div className={classes.appFrame}>
        <AppBar onDrawerToggleOpen={this.handleDrawerToggleOpen} />
        <Drawer drawerOpen={drawerOpen} routes={routes.filter(route => route.displayByDrawer)} />
        <Snackbar open={snackbarOpen} handleClose={this.handleSnackbarClose} />
        <Main drawerOpen={drawerOpen} routes={routes} />
      </div>
    );

    const UnAuthorizedApp = (
      <div className={classes.appFrame}>
        <Main drawerOpen={false} routes={routes} className={classes.mainUnConnected} />
      </div>
    );

    const AppComponent = isAuthenticated ? AuthorizedApp : UnAuthorizedApp;

    return (AppComponent);
  }
}

const styles = theme => ({
  '@global *': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  '@global html, body, #app': {
    height: '100%',
    overflowY: 'auto',
  },
  '@global body': {
    backgroundColor: theme.palette.background.default,
  },
  appFrame: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  mainUnConnected: {
    margin: 0,
  },
});

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

const appWithStyle = withStyles(styles)(App);
const connectedApp = connect(mapStateToProps)(appWithStyle);
export default withRouter(connectedApp);
