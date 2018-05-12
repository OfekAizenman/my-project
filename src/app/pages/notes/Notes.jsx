import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import NotesGridContainer from './notesGrid';
import AddNoteContainer from '../../../common/components/addNote';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

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

class Notes extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AddNoteContainer rootClassName={classes.addNote} />
                <NotesGridContainer />
            </div>
        )
    }
}

Notes.propTypes = propTypes;
export default withStyles(styles)(Notes);

