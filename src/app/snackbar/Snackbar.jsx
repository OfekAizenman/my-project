import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiSnackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class Snackbar extends Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    this.setState(this.props.handleClose());
  }

  render() {
    const {
      classes,
      message,
      handleUndo,
      open,
    } = this.props;

    return (
      <MuiSnackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        autoHideDuration={6000}
        onClose={this.handleClose}
        open={open}
        message={<span id='message-id'>{message}</span>}
        action={[
          <Button key='undo' color='secondary' size='small' onClick={handleUndo}>
            UNDO
          </Button>,
          <IconButton
            key='close'
            aria-label='Close'
            color='inherit'
            className={classes.close}
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    );
  }
}

Snackbar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  handleClose: PropTypes.func.isRequired,
  handleUndo: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default withStyles(styles)(Snackbar);
