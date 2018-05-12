import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import NoteContainer from './NoteContainer';

const styles = () => ({
  grid: {
    padding: '0 20px',
  },
});

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  notes: ImmutablePropTypes.list.isRequired,
};

class NotesGrid extends PureComponent {
  render() {
    const { classes, notes } = this.props;

    return (
      <Grid className={classes.grid} container spacing={16}>
        {notes.map(note => (
          <Grid key={note.get('id')} item xs={3}>
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

NotesGrid.propTypes = propTypes;
export default withStyles(styles)(NotesGrid);
