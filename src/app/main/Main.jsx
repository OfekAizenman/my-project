import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { drawerWidth } from '../../common/constants';

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    height: 'calc(100% - 56px)',
    width: '100%',
    marginTop: 56,
    marginLeft: -drawerWidth,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    marginLeft: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
});

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  drawerOpen: PropTypes.bool.isRequired,
  routes: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  className: '',
};

// eslint-disable-next-line react/prefer-stateless-function
class Main extends Component {
  render() {
    const {
      classes,
      className,
      drawerOpen,
      routes,
    } = this.props;

    const routeComponents = routes.map(route => (
      <Route
        exact={route.exact}
        path={route.path}
        component={route.component}
        key={route.id}
      />
    ));

    const contentClasses = classNames(classes.content, {
      [classes.contentShift]: drawerOpen,
    }, className);

    return (
      <main className={contentClasses}>
        <Switch>
          {routeComponents}
        </Switch>
      </main>
    );
  }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;
export default withStyles(styles)(Main);
