import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MuiDrawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { drawerWidth } from '../../globals/variables';
import { routes } from '../routes/index';
import AssignmentIcon from 'material-ui-icons/Assignment';
import blue from 'material-ui/colors/blue';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        position: 'fixed',
        height: '100%',
        width: drawerWidth,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    userDetails: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 8,
    },
    userName: {

    },
    userEmail: {
        fontSize: '0.75rem',
    },
    link: {
        textDecoration: 'none',
    },
    linkActive: {
        '& $primary': {
            color: blue[500],
          },
    },
    primary: {}
});

const propTypes = {
    classes: PropTypes.object.isRequired,
}

class Drawer extends Component {
    render() {
        const { classes, location } = this.props;

        return (
            <MuiDrawer variant="permanent" classes={{ paper: classes.root }}>
                <div className={classes.header}>
                    <Avatar>OA</Avatar>
                    <div className={classes.userDetails}>
                        <Typography variant='subheading'>Ofek Aizenman</Typography>
                        <Typography className={classes.userEmail} color='textSecondary'>ofek.aizenman@gmail.com</Typography>
                    </div>
                </div>
                <Divider />
                <div>
                    {routes.map(route => {
                        return (
                            <NavLink key={route.id} to={route.path} exact={route.exact} className={classes.link} activeClassName={classes.linkActive}>
                                <ListItem button>
                                    <ListItemIcon>
                                        {route.icon}
                                    </ListItemIcon>
                                    <ListItemText classes={{ primary: classes.primary }} primary={route.title} />
                                </ListItem>
                            </NavLink>
                        )
                    })}
                </div>
            </MuiDrawer>
        )
    }
}

Drawer.propTypes = propTypes;
export default withStyles(styles)(Drawer);