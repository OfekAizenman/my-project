import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../../redux/actions/userActions';
import Login from './Login';

const propTypes = {
  login: PropTypes.func.isRequired,
};

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { login: loginConnected } = this.props;
    loginConnected(values);
  }

  render() {
    return (
      <Login onSubmit={this.handleSubmit} />
    );
  }
}

LoginContainer.propTypes = propTypes;

const connectedLoginContainer = connect(
  null,
  { login },
)(LoginContainer);

export default connectedLoginContainer;
