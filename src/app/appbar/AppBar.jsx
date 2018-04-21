import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MuiAppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { drawerWidth } from '../../../globals/variables';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    header: {
        flex: '1 0 auto'
    },
    searchRoot: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row-reverse'
    },
    searchInput: {
        background: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 4,
        fontSize: 16,
        padding: '10px 12px',
        width: 250,
        transition: 'width .2s',
        '&:focus': {
            width: 400
        }
    }
});

const propTypes = {
    classes: PropTypes.object.isRequired,
}

class AppBar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <MuiAppBar className={classes.appBar} position='fixed' color='default'>
                <Toolbar>
                    <Typography className={classes.header} variant="title" color='inherit' noWrap>
                        Notes
                    </Typography>
                    <div className={classes.searchRoot}>
                        <TextField
                            placeholder="Search"
                            InputProps={{
                                disableUnderline: true,
                                classes: {
                                    input: classes.searchInput,
                                },
                            }}
                        />
                    </div>
                </Toolbar>
            </MuiAppBar>
        )
    }
}

AppBar.propTypes = propTypes;
export default withStyles(styles)(AppBar);