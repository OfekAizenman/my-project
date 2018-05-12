import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNote } from '../../../redux/actions/noteActions';
import AddNote from './AddNote';

const propTypes = {
  addNote: PropTypes.func.isRequired,
};

class AddNoteContainer extends Component {
  constructor(props) {
    super(props);

    this.handleAddNote = this.handleAddNote.bind(this);
  }

  handleAddNote(description, title) {
    const { addNote: addNoteConnected } = this.props;
    addNoteConnected(description, title);
  }

  render() {
    return (
      <AddNote
        onAddNote={this.handleAddNote}
        {...this.props}
      />
    );
  }
}

AddNoteContainer.propTypes = propTypes;

const connectedAddNoteContainer = connect(
  null,
  { addNote },
)(AddNoteContainer);

export default connectedAddNoteContainer;
