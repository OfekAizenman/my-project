// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import MuiAppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import deepOrange from '@material-ui/core/colors/deepOrange';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExtendedAvatar from '../../common/components/extendedAvatar';
import { getEmail, getFullName, getInitials } from '../../redux/reducers';
import { logout } from '../../redux/actions/userActions';


type Props = {
  classes: {
    menuButton: {},
    avatar: {},
    appBar: {},
    header: {},
    popover_detailsSection: {},
    popover_bigAvatar: {},
    popover_nameAndEmail: {},
    popover_actionsSection: {},
  },
  email: string,
  fullName: string,
  initials: string,
  onDrawerToggleOpen: Function,
  logout: Function, // redux
};

class AppBar extends PureComponent<Props> {
  render() {
    const {
      classes,
      email,
      fullName,
      initials,
      onDrawerToggleOpen,
      logout: logoutConnected,
    } = this.props;

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
          <ExtendedAvatar avatarClassName={classes.avatar} innerText={initials} popover>
            <div className={classes.popover_detailsSection}>
              <Avatar className={classes.popover_bigAvatar}>
                {initials}
              </Avatar>
              <div className={classes.popover_nameAndEmail}>
                <Typography variant='subheading' noWrap>
                  {fullName}
                </Typography>
                <Typography variant='subheading' color='textSecondary' noWrap>
                  {email}
                </Typography>
              </div>
            </div>
            <Divider />
            <div className={classes.popover_actionsSection}>
              <Button color='primary' onClick={logoutConnected}>LOGOUT</Button>
            </div>
          </ExtendedAvatar>
        </Toolbar>
      </MuiAppBar>
    );
  }
}

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
  avatar: {
    margin: '10px 16px 10px 10px',
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  popover_detailsSection: {
    display: 'flex',
  },
  popover_bigAvatar: {
    height: 80,
    width: 80,
    margin: 14,
    fontSize: '2rem',
  },
  popover_nameAndEmail: {
    marginTop: 14,
  },
  popover_actionsSection: {
    display: 'flex',
    justifyContent: 'center',
    padding: '8px 0',
  },
});

const mapStateToProps = state => ({
  email: getEmail(state),
  fullName: getFullName(state),
  initials: getInitials(state),
});

const appBarWithStyles = withStyles(styles)(AppBar);
const connectedAppBarWithStyles = connect(
  mapStateToProps,
  { logout },
)(appBarWithStyles);

export default connectedAppBarWithStyles;
