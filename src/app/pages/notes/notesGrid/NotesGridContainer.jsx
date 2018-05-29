// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { fetchNotes } from '../../../../redux/actions/noteActions';
import { getVisibleNotes } from '../../../../redux/reducers';
import NotesGrid from './NotesGrid';

type Props = {
  filter: string,
  fetchNotes: Function,
}

class NotesContainer extends Component<Props> {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { filter, fetchNotes: FetchNotesConnected } = this.props;
    FetchNotesConnected(filter);
  }

  render() {
    return (
      <NotesGrid {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  const filter = 'all';
  return {
    notes: fromJS(getVisibleNotes(state, filter)),
    filter,
  };
};

const connectedNotesContainer = connect(
  mapStateToProps,
  { fetchNotes },
)(NotesContainer);

export default connectedNotesContainer;
