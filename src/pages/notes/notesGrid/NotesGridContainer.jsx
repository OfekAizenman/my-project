import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getAllNotes } from '../../../managers/notesManager';
import { fromJS, List } from 'immutable'; 
import NotesGrid from './NotesGrid';


export default class NotesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { notes: List() };
    }

    componentDidMount() {
        const notes = getAllNotes().then(res => {
            this.setState({ notes: fromJS(res.data) });
        });
    }
    
    render() {
        return (
            <NotesGrid {...this.state}/>
        )
    }
}