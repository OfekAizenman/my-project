// @flow

import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { List, Record } from 'immutable';
import NoteContainer from './NoteContainer';

type exampleNote = {
  description: ?string,
  id: string,
  title: ?string,
};

type Props = {
  classes: {
    grid: {},
  },
  notes: List<Record<exampleNote>>,
};

class NotesGrid extends PureComponent<Props> {
  render() {
    const { classes, notes } = this.props;

    return (
      <Grid className={classes.grid} container spacing={16}>
        {notes.map(note => (
          <Grid key={note.get('id')} item xs={12} sm={6} md={3}>
            <NoteContainer
              description={note.get('description')}
              id={note.get('id')}
              title={note.get('title')}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

const styles = () => ({
  grid: {
    padding: '0 20px',
  },
});

export default withStyles(styles)(NotesGrid);
