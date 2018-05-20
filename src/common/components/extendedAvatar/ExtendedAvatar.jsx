import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  avatar: {
    cursor: 'pointer',
    margin: 10,
  },
  popover: {
    width: 350,
  },
});

const propTypes = {
  avatarClassName: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.shape({}).isRequired,
  innerText: PropTypes.string.isRequired,
  popover: PropTypes.bool,
};

const defaultProps = {
  avatarClassName: '',
  children: null,
  popover: false,
};


class ExtendedAvatar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

ExtendedAvatar.propTypes = propTypes;
ExtendedAvatar.defaultProps = defaultProps;
export default withStyles(styles)(ExtendedAvatar);
