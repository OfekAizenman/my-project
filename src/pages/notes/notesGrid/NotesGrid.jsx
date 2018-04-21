import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames';
import Grid from 'material-ui/Grid';
import NoteContainer from './NoteContainer';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    grid: {
        padding: '0 20px'
    }
})

const propTypes = {
    classes: PropTypes.object.isRequired,
    notes: ImmutablePropTypes.list.isRequired
};

class NotesGrid extends Component {
    render() {
        const { classes, notes } = this.props;
        
        return (
            <Grid className={classes.grid} container spacing={16}>
                {
                    notes.map(note =>
                        <Grid key={note.get('_id')} item xs={3}>
                            <NoteContainer 
                                description={note.get('description')}
                                id={note.get('_id')}
                                title={note.get('title')} />
                        </Grid>
                    )
                }
            </Grid>
        )
    }
}

NotesGrid.propTypes = propTypes;
export default withStyles(styles)(NotesGrid);