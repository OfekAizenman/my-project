import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MuiDrawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import { MenuItem } from 'material-ui/Menu';
import grey from 'material-ui/colors/grey';
import { drawerWidth } from '../../../globals/variables';
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
        color: grey[400],
        fontSize: '0.75rem',
    }
});

const propTypes = {
    classes: PropTypes.object.isRequired,
}

class Drawer extends Component {
    render() {
        const { classes } = this.props;

        debugger
    
        return (
            <MuiDrawer variant="permanent" classes={{ paper: classes.root }}>
                <div className={classes.header}>
                    <Avatar>OA</Avatar>
                    <div className={classes.userDetails}>
                        <Typography variant='subheading'>Ofek Aizenman</Typography>
                        <Typography className={classes.userEmail}>ofek.aizenman@gmail.com</Typography>
                    </div>
                </div>
                <Divider />
            </MuiDrawer>
        )
    }
}

Drawer.propTypes = propTypes;
export default withStyles(styles)(Drawer);