import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signin, gotoSignup } from '../../../redux/actions/userActions';
import Signin from './Signin';

class SigninContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { signin: signinConnected } = this.props;
    signinConnected(values);
  }

  render() {
    return (
      <Signin
        onSubmit={this.handleSubmit}
        onGoToInstead={this.props.gotoSignup}
      />
    );
  }
}

SigninContainer.propTypes = {
  signin: PropTypes.func.isRequired,
  gotoSignup: PropTypes.func.isRequired,
};

const connectedSigninContainer = connect(
  null,
  { signin, gotoSignup },
)(SigninContainer);

export default connectedSigninContainer;
