// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../../redux/actions/noteActions';
import AddNote from './AddNote';

type Props = {
  addNote: Function,
};

class AddNoteContainer extends Component<Props> {
  constructor(props) {
    super(props);

    (this: any).handleAddNote = this.handleAddNote.bind(this);
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

const connectedAddNoteContainer = connect(
  null,
  { addNote },
)(AddNoteContainer);

export default connectedAddNoteContainer;
