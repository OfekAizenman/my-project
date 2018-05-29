// @flow

import React, { Component, type Element } from 'react';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';


type Props = {
  avatarClassName?: string,
  children?: Element<any>,
  classes: {
    avatar: {},
    popover: {},
  },
  innerText: string,
  popover?: boolean,
};

type State = {
  anchorEl: Element<any> | null,
}

class ExtendedAvatar extends Component<Props, State> {
  static defaultProps = {
    avatarClassName: '',
    children: null,
    popover: false,
  }

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };

    (this: any).handleClick = this.handleClick.bind(this);
    (this: any).handleClose = this.handleClose.bind(this);
  }

  handleClick(event) {
    this.setState({
      anchorEl: event.currentTarget,
    });
  }

  handleClose() {
    this.setState({
      anchorEl: null,
    });
  }

  render() {
    const {
      avatarClassName,
      children,
      classes,
      innerText,
      popover,
    } = this.props;
    const { anchorEl } = this.state;

    const avatarClasses = classNames(classes.avatar, avatarClassName);

    return (
      <div>
        <Avatar className={avatarClasses} onClick={this.handleClick}>{innerText}</Avatar>
        {popover && children && (
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={this.handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            classes={{
              paper: classes.popover,
            }}
          >
            <div>
              {children}
            </div>
          </Popover>
        )}
      </div>
    );
  }
}

const styles = () => ({
  avatar: {
    cursor: 'pointer',
    margin: 10,
  },
  popover: {
    width: 350,
  },
});

export default withStyles(styles)(ExtendedAvatar);
