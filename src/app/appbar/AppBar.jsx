import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MuiAppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  header: {
    flex: '1 0 auto',
  },
});

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  onDrawerToggleOpen: PropTypes.func.isRequired,
};

class AppBar extends PureComponent {
  render() {
    const { classes, onDrawerToggleOpen } = this.props;

    return (
      <MuiAppBar className={classes.appBar} color='default'>
        <Toolbar disableGutters>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={onDrawerToggleOpen}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.header} variant='title' color='inherit' noWrap>
            Notes
          </Typography>
        </Toolbar>
      </MuiAppBar>
    );
  }
}

AppBar.propTypes = propTypes;
export default withStyles(styles)(AppBar);
