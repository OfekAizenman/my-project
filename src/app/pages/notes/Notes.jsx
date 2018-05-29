// @flow

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import NotesGridContainer from './notesGrid';
import AddNoteContainer from '../../../common/components/addNote';


type Props = {
  classes: {
    root: {},
    addNote: {},
  },
};

// eslint-disable-next-line react/prefer-stateless-function
class Notes extends Component<Props> {
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

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  addNote: {
    margin: '12px 0 32px 0',
    maxWidth: 500,
  },
});

export default withStyles(styles)(Notes);

