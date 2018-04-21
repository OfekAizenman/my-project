import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
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
        transition: 'height .2s'
    },
    addButton: {
        alignSelf: 'flex-end'
    },
    rootFocused: {
        height: 120,
    },
    hidden: {
        display: 'none'
    },
    descriptionInput: {

    },
    titleInput: {

    },
});

const propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    onAddNote: PropTypes.func.isRequired,
    rootClassName: PropTypes.string,
};

class AddNote extends Component {
    constructor(props) {
        super(props);
    
        this.state = { 
            description: '',
            focus: false,
            title: ''
         };

        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.rootRef && !this.rootRef.contains(event.target)) {
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

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.rootRef = node;
    }

    render() {
        const { classes, className, rootClassName } = this.props;
        const { description, focus, title } = this.state;

        const addButton = classNames(classes.addButton, {
            [classes.hidden]: !focus
        });

        const titleClassName = classNames(classes.descriptionInput, {
            [classes.hidden]: !focus
        });
        
        const rootClasses = classNames(classes.root, {
            [classes.rootFocused]: focus
        }, className);

        return (
            <div className={rootClasses} ref={this.setWrapperRef}>
                <TextField
                    className={titleClassName}
                    placeholder="Title"
                    onChange={this.handleTitleChange}
                    InputProps={{
                        disableUnderline: true,
                        classes: {
                            input: classes.input,
                        },
                    }}
                    value={title} />
                <TextField
                    placeholder="Take a note..."
                    onChange={this.handleDescriptionChange}
                    onFocus={this.handleFocus}
                    InputProps={{
                        disableUnderline: true,
                        classes: {
                            input: classes.input,
                        },
                    }}
                    value={description} />
                <Button className={addButton} onClick={this.handleDone}>DONE</Button>
            </div>
        )
    }
}

AddNote.propTypes = propTypes;
export default withStyles(styles)(AddNote);





// addNoteRoot: {
//     display: 'flex',
//     justifyContent: 'center',
//     margin: '24px 0 36px 0',
//   },
//   addNotePaper: {
//     background: 'rgba(255, 255, 255, 0.6)',
//     borderRadius: 2,
//     boxSizing: 'border-box',
//     boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12)',
//     maxWidth: 600,
//     width: '100%',
//   },
//   addNoteInput: {
//     fontSize: 16,
//     overflow: 'hidden',
//     padding: '16px 12px',
//     position: 'relative',
//     transition: 'height .2s',
//     '&:focus': {
//         height: 200
//     },
//   }

// <div className={classes.addNoteRoot}>
//        <Paper className={classes.addNotePaper}>
//            <TextField
//                placeholder="Take a note..."
//                InputProps={{
//                    disableUnderline: true,
//                    classes: {
//                        input: classes.addNoteInput,
//                    },
//                }}
//            />
//        </Paper>
//    </div>