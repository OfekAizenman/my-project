// @flow

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import renderTextField from '../../../common/components/form/TextField';


type FormField = {
  name: string,
  label: string,
}

const formFields: Array<FormField> = [{
  name: 'first',
  label: 'First name',
}, {
  name: 'last',
  label: 'Last name',
}, {
  name: 'email',
  label: 'Email',
}, {
  name: 'password',
  label: 'Password',
}, {
  name: 'confirmPassword',
  label: 'Confirm Password',
}];

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'first',
    'last',
    'email',
    'password',
    'confirmPassword',
  ];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

type Props = {
  classes: {
    root: {},
    card: {},
    button: {},
    signup: {},
    cardActions: {},
    headline: {},
    inputProps: {},
  },
  onGoToInstead: Function,
  onSubmit: Function,
  handleSubmit: Function, // redux-form
  submitting: boolean, // redux-form
  valid: boolean, // redux-form
};

// eslint-disable-next-line react/prefer-stateless-function
class Signup extends Component<Props> {
  render() {
    const {
      classes,
      handleSubmit,
      onGoToInstead,
      onSubmit,
      valid,
      submitting,
    } = this.props;

    return (
      <div className={classes.root}>
        <form onSubmit={handleSubmit}>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                variant='headline'
                classes={{
                  root: classes.headline,
                }}
              >
                Create your account
              </Typography>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <Field
                    name='first'
                    label='First name'
                    component={renderTextField}
                    className={classes.inputProps}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name='last'
                    label='Last name'
                    component={renderTextField}
                    className={classes.inputProps}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name='email'
                    label='Email'
                    component={renderTextField}
                    className={classes.inputProps}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name='password'
                    label='Password'
                    component={renderTextField}
                    className={classes.inputProps}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name='confirmPassword'
                    label='Confirm password'
                    component={renderTextField}
                    className={classes.inputProps}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions className={classes.cardActions} disableActionSpacing>
              <Button
                classes={{
                  root: classes.signup,
                }}
                onClick={onGoToInstead}
              >
                Sign in instead
              </Button>
              <Button
                className={classes.button}
                color='primary'
                disabled={!valid || submitting}
                variant='raised'
                type='submit'
              >
                Submit
              </Button>
            </CardActions>
          </Card>
        </form>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  card: {
    maxWidth: 550,
    padding: theme.spacing.unit * 3,
  },
  button: {
    margin: theme.spacing.unit,
  },
  signup: {
    color: '#4285f4',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  cardActions: {
    justifyContent: 'space-between',
    marginTop: 24,
  },
  headline: {
    marginBottom: 24,
  },
  inputProps: {
    width: '100%',
  },
});

const SignupWithStyles = withStyles(styles)(Signup);

export default reduxForm({
  form: 'SignupForm',
  validate,
})(SignupWithStyles);
