import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from "redux";
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducers';

const isAuthenticated = WrappedComponent => (
  function ({isAuthenticated, ...other}) {
    return isAuthenticated ? (
      <WrappedComponent {...other} />
    ) : (
      null
    )
  }
);

const mapStateToProps = state => ({
  isUserAuthenticated: getUser(state) !== null,
});

const composedIsAuthenticatedHoc = compose(
  connect(mapStateToProps),
  isAuthenticated,
);

export default composedIsAuthenticatedHoc;

