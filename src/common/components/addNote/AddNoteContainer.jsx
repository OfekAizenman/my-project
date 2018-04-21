import React, { Component } from 'react';
import { addNote } from '../../../managers/notesManager';
import AddNote from './AddNote';

export default class AddNoteContainer extends Component {
    constructor(props) {
        super(props);
    
        this.handleAddNote = this.handleAddNote.bind(this);
    }

    handleAddNote(description, title) {
        addNote(description, title);
    }

    render() {
        return (
            <AddNote 
                onAddNote={this.handleAddNote}
                {...this.props} />
        )
    }
}