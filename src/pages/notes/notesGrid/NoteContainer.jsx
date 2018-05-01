import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { deleteNote } from '../../../api/notesApi';
import Note from './Note';

export default class NoteContainer extends Component {
    constructor(props) {
        super(props);
    
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id) {
        deleteNote(id);
    }

    render() {
        return (
            <Note 
                onDelete={this.handleDelete}
                {...this.props} />
        )
    }
}