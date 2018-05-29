// @flow

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MuiDrawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../../common/constants';
import { type RouteType } from '../../common/routes';


type Props = {
  classes: {
    root: {},
    toolbar: {},
    routesFrame: {},
    link: {},
    linkActive: {},
    listItemRoot: {},
  },
  drawerOpen: boolean,
  routes: Array<RouteType>,
};

// eslint-disable-next-line react/prefer-stateless-function
class Drawer extends Component<Props> {
  render() {
    const { classes, drawerOpen, routes } = this.props;

    return (
      <MuiDrawer
        variant='persistent'
        open={drawerOpen}
        classes={{ paper: classes.root }}
      >
        <div className={classes.toolbar} />
        <div className={classes.routesFrame}>
          {routes.map(route => (
            <NavLink
              key={route.id}
              to={route.path}
              exact={route.exact}
              className={classes.link}
              activeClassName={classes.linkActive}
            >
              <ListItem button classes={{ root: classes.listItemRoot }}>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.title} />
              </ListItem>
            </NavLink>
          ))}
        </div>
      </MuiDrawer>
    );
  }
}

const styles = theme => ({
  root: {
    backgroundColor: 'transparent',
    borderRight: 'none',
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  routesFrame: {
    padding: '16px 8px',
  },
  link: {
    textDecoration: 'none',
  },
  linkActive: {
    '& $listItemRoot': {
      borderRadius: '2px',
      backgroundColor: 'rgba(0, 0, 0, 0.07)',
    },
  },
  listItemRoot: {
    paddingLeft: 16,
  },
});

export default withStyles(styles)(Drawer);
