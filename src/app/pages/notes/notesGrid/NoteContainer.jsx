// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../../../../redux/actions/noteActions';
import Note from './Note';

type Props = {
  deleteNote: Function,
};

class NoteContainer extends Component<Props> {
  constructor(props) {
    super(props);

    (this: any).handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    const { deleteNote: deleteNoteConnected } = this.props;
    deleteNoteConnected(id);
  }

  render() {
    return (
      <Note
        onDelete={this.handleDelete}
        {...this.props}
      />
    );
  }
}

const connectedNoteContainer = connect(
  null,
  { deleteNote },
)(NoteContainer);

export default connectedNoteContainer;
