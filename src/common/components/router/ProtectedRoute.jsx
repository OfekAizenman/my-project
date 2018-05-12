import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from '../../../redux/reducers';

const propTypes = {
  component: PropTypes.any.isRequired,
  needAuthentication: PropTypes.bool,
  user: PropTypes.shape({}).isRequired,
};

const defaultProps = {
  needAuthentication: true,
};

// eslint-disable-next-line react/prefer-stateless-function
class ProtectedRoute extends Component {
  render() {
    const {
      component: ComponentProp,
      needAuthentication,
      user,
      ...rest
    } = this.props;

    const isAuthenticated = !needAuthentication || user != null;

    return (
      <Route
        {...rest}
        render={props => (
          isAuthenticated ?
            <ComponentProp {...props} /> :
            <Redirect to='/login' />
        )}
      />
    );
  }
}

ProtectedRoute.propTypes = propTypes;
ProtectedRoute.defaultProps = defaultProps;

const mapStateToProps = state => ({
  user: getUser(state),
});

const connectedProtectedRoute = connect(
  mapStateToProps,
  null,
)(ProtectedRoute);

export default connectedProtectedRoute;
