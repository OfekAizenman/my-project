// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';

const ITEM_HEIGHT = 48;

type Props = {
  classes: {
    card: {},
    cardHeader: {},
    cardContent: {},
    actions: {},
    hidden: {},
  },
  description?: string,
  id: string,
  onDelete: Function,
  title?: string,
};

type State = {
  anchorEl: null | Element<typeof IconButton>,
  hover: boolean,
}

class Note extends Component<Props, State> {
  static defaultProps = {
    description: '',
    title: '',
  }

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      hover: false,
    };

    (this: any).handleDelete = this.handleDelete.bind(this);
    (this: any).handleMenuClose = this.handleMenuClose.bind(this);
    (this: any).handleMenuOpen = this.handleMenuOpen.bind(this);
    (this: any).handleMouseHover = this.handleMouseHover.bind(this);
    (this: any).handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleDelete() {
    this.props.onDelete(this.props.id);
    this.handleMenuClose();
  }

  handleMenuClose() {
    this.setState({ anchorEl: null });
  }

  handleMenuOpen(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleMouseHover() {
    this.setState({ hover: true });
  }

  handleMouseLeave() {
    this.setState({ hover: false });
  }

  render() {
    const { classes, description, title } = this.props;
    const { anchorEl, hover } = this.state;

    const actionClasses = classNames({
      // $FlowFixMe
      [classes.hidden]: !hover,
    });

    return (
      <Card
        onMouseOver={this.handleMouseHover}
        onFocus={this.handleMouseHover}
        onMouseLeave={this.handleMouseLeave}
        onBlur={this.handleMouseLeave}
      >
        <CardContent>
          <Typography className={classes.cardHeader} component='p'>{title}</Typography>
          <Typography className={classes.cardContent} component='p'>{description}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            aria-label='More'
            aria-haspopup='true'
            className={actionClasses}
            onClick={this.handleMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id='long-menu'
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleMenuClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200,
              },
            }}
          >
            <MenuItem onClick={this.handleDelete}>
              Delete note
            </MenuItem>
          </Menu>
        </CardActions>
      </Card>
    );
  }
}

const styles = theme => ({
  card: {
    padding: 16,
    color: theme.palette.text.secondary,
  },
  cardHeader: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 18,
  },
  cardContent: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 26,

  },
  actions: {
    flexDirection: 'row-reverse',
  },
  hidden: {
    visibility: 'hidden',
  },
});

export default withStyles(styles)(Note);
