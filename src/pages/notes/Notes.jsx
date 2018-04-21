// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotesGridContainer from './notesGrid';
import AddNoteContainer from '../../common/components/addNote';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  addNote: {
      margin: '12px 0 32px 0',
      maxWidth: 500
  }
});

const propTypes = {
    classes: PropTypes.object.isRequired,
}

class Notes extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AddNoteContainer className={classes.addNote} />
                <NotesGridContainer />
            </div>
        )
    }
}

Notes.propTypes = propTypes;
export default withStyles(styles)(Notes);

