import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { fromJS, List } from 'immutable';
import { fetchNotes } from '../../../../redux/actions/noteActions';
import { getVisibleNotes } from '../../../../redux/reducers';
import NotesGrid from './NotesGrid';

const propTypes = {
  filter: PropTypes.string.isRequired,
  fetchNotes: PropTypes.func.isRequired,
}

class NotesContainer extends Component {
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

NotesContainer.propTypes = propTypes;

const connectedNotesContainer = connect(
  mapStateToProps,
  { fetchNotes },
)(NotesContainer);

export default connectedNotesContainer;
