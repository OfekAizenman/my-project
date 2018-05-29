// @flow

import React, { Component } from 'react';
import classNames from 'classnames';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../../common/constants';
import { type RouteType } from '../../common/routes';


type Props = {
  classes: {
    content: {},
    transition: {},
    contentShift: {},
  },
  className: ?string,
  drawerOpen: boolean,
  routes: Array<RouteType>
}

// eslint-disable-next-line react/prefer-stateless-function
class Main extends Component<Props> {
  static defaultProps = {
    className: '',
  };

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
      // $FlowFixMe
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

const styles = theme => ({
  content: {
    flexGrow: 1,
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

export default withStyles(styles)(Main);
