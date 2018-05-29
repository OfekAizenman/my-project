// @flow

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiSnackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

type Props = {
  classes: {
    close: {},
  },
  handleClose: Function,
  handleUndo: Function,
  open: boolean,
  message: string,
};

class Snackbar extends Component<Props> {
  constructor(props) {
    super(props);

    (this: any).handleClose = this.handleClose.bind(this);
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

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

export default withStyles(styles)(Snackbar);
