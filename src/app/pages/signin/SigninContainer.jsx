// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin, gotoSignup } from '../../../redux/actions/userActions';
import Signin from './Signin';

type Props = {
  signin: Function,
  gotoSignup: Function,
};

class SigninContainer extends Component<Props> {
  constructor(props) {
    super(props);

    (this: any).handleSubmit = this.handleSubmit.bind(this);
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

const connectedSigninContainer = connect(
  null,
  { signin, gotoSignup },
)(SigninContainer);

export default connectedSigninContainer;
