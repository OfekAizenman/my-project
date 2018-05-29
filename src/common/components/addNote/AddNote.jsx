// @flow

import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


type Props = {
  classes: {
    root: {},
    rootFocused: {},
    addButton: {},
    hidden: {},
    descriptionInput: {},
    titleInput: {},
  },
  onAddNote: Function,
  rootClassName?: string,
};

type State = {
  description: ?string,
  focus: boolean,
  title: ?string,
};

class AddNote extends Component<Props, State> {
  // eslint-disable-next-line react/sort-comp
  rootRef: {current: null | HTMLDivElement} = React.createRef();

  static defaultProps = {
    rootClassName: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      description: '',
      focus: false,
      title: '',
    };

    // Set the wrapper ref
    // this.rootRef = React.createRef();

    (this: any).handleClickOutside = this.handleClickOutside.bind(this);
    (this: any).handleDescriptionChange = this.handleDescriptionChange.bind(this);
    (this: any).handleDone = this.handleDone.bind(this);
    (this: any).handleFocus = this.handleFocus.bind(this);
    (this: any).handleTitleChange = this.handleTitleChange.bind(this);
  }

  componentDidMount() {
    (document.addEventListener: Function)('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    (document.addEventListener: Function)('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.rootRef.current && !this.rootRef.current.contains(event.target)) {
      this.handleDone();
    }
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleDone() {
    const { description, title } = this.state;

    if (description || title) {
      this.props.onAddNote(description, title);
    }

    this.setState({
      description: '',
      focus: false,
      title: '',
    });
  }

  handleFocus() {
    this.setState({ focus: true });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    const { classes, rootClassName } = this.props;
    const { description, focus, title } = this.state;

    const addButton = classNames(classes.addButton, {
      // $FlowFixMe
      [classes.hidden]: !focus,
    });

    const titleClassName = classNames(classes.descriptionInput, {
      // $FlowFixMe
      [classes.hidden]: !focus,
    });

    const rootClasses = classNames(classes.root, {
      // $FlowFixMe
      [classes.rootFocused]: focus,
    }, rootClassName);

    return (
      <div className={rootClasses} ref={this.rootRef}>
        <TextField
          className={titleClassName}
          placeholder='Title'
          onChange={this.handleTitleChange}
          InputProps={{
            disableUnderline: true,
          }}
          value={title}
        />
        <TextField
          placeholder='Take a note...'
          onChange={this.handleDescriptionChange}
          onFocus={this.handleFocus}
          value={description}
          InputProps={{
            disableUnderline: true,
          }}
        />
        <Button className={addButton} onClick={this.handleDone}>DONE</Button>
      </div>
    );
  }
}

const styles = () => ({
  root: {
    alignSelf: 'center',
    background: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 2,
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12)',
    boxSizing: 'border-box',
    display: 'flex',
    height: 50,
    padding: '10px 12px',
    flexDirection: 'column',
    minWidth: 400,
    transition: 'height .2s',
  },
  addButton: {
    alignSelf: 'flex-end',
  },
  rootFocused: {
    height: 120,
  },
  hidden: {
    display: 'none',
  },
  descriptionInput: {

  },
  titleInput: {

  },
});

export default withStyles(styles)(AddNote);
