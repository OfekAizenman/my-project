import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signup, gotoSignin } from '../../../redux/actions/userActions';
import Signup from './Signup';

class SignupContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { signup: signupConnected } = this.props;
    signupConnected(values);
  }

  render() {
    return (
      <Signup
        onSubmit={this.handleSubmit}
        onGoToInstead={this.props.gotoSignin}
      />
    );
  }
}

SignupContainer.propTypes = {
  signup: PropTypes.func.isRequired,
  gotoSignin: PropTypes.func.isRequired,
};

const connectedSignupContainer = connect(
  null,
  { signup, gotoSignin },
)(SignupContainer);

export default connectedSignupContainer;
