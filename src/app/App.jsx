import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from './appBar';
import Drawer from './drawer';
import Main from './main';
import getRoutes from '../common/routes';
import { getIsAuthenticated } from '../redux/reducers';

const styles = () => ({
  '@global *': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  '@global html, body, #app': {
    height: '100%',
    overflowY: 'auto',
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

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: true,
    };

    this.handleDrawerToggleOpen = this.handleDrawerToggleOpen.bind(this);
  }

  handleDrawerToggleOpen() {
    this.setState(prevState => ({
      drawerOpen: !prevState.drawerOpen,
    }));
  }

  render() {
    const { classes, isAuthenticated } = this.props;
    const { drawerOpen } = this.state;

    const routes = getRoutes(isAuthenticated);

    const AuthorizedApp = (
      <div className={classes.appFrame}>
        <AppBar onDrawerToggleOpen={this.handleDrawerToggleOpen} />
        <Drawer drawerOpen={drawerOpen} routes={routes.filter(route => route.displayByDrawer)} />
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

App.propTypes = propTypes;

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

const appWithStyle = withStyles(styles)(App);
const connectedApp = connect(mapStateToProps)(appWithStyle);
export default withRouter(connectedApp);

