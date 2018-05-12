import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteNote } from '../../../../redux/actions/noteActions';
import Note from './Note';

const propTypes = {
  deleteNote: PropTypes.func.isRequired,
};

class NoteContainer extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
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

NoteContainer.propTypes = propTypes;

const connectedNoteContainer = connect(
  null,
  { deleteNote },
)(NoteContainer);

export default connectedNoteContainer;
