import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import MuiDrawer from 'material-ui/Drawer';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import { drawerWidth } from '../../common/constants';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
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
    borderRadius: '2px',
    '& $listItemRoot': {
      backgroundColor: 'rgba(0, 0, 0, 0.07)',
    },
  },
  listItemRoot: {
    paddingLeft: 16,
  },
});

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  routes: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

// eslint-disable-next-line react/prefer-stateless-function
class Drawer extends Component {
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

Drawer.propTypes = propTypes;
export default withStyles(styles)(Drawer);
