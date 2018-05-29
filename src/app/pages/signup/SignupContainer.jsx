// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup, gotoSignin } from '../../../redux/actions/userActions';
import Signup from './Signup';

type Props = {
  signup: Function,
  gotoSignin: Function,
}

class SignupContainer extends Component<Props> {
  constructor(props) {
    super(props);

    (this: any).handleSubmit = this.handleSubmit.bind(this);
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

const connectedSignupContainer = connect(
  null,
  { signup, gotoSignin },
)(SignupContainer);

export default connectedSignupContainer;
