import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../routes/index';
import { drawerWidth } from '../../globals/variables';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
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
      }
})

const propTypes = {
    classes: PropTypes.object.isRequired,
}

class Main extends Component {
    render() {
        const { classes } = this.props;

        const routeComponents = routes.map(route => 
            <Route exact={route.exact} path={route.path} component={route.component} key={route.id} />
        );

        return (
            <main className={classes.content}>
                <Switch>
                    <Redirect exact from='/' to='/notes'/>
                    {routeComponents}
                </Switch>
            </main>
        );
    }
}

Main.propTypes = propTypes;
export default withStyles(styles)(Main);