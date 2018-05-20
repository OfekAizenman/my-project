import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import renderTextField from '../../../common/components/form/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
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
  card: {
    padding: theme.spacing.unit * 3,
    width: 450,
  },
  cardActions: {
    justifyContent: 'space-between',
    marginTop: 24,
  },
  headline: {
    marginBottom: 24,
  },
  textFieldContainer: {
    padding: `${theme.spacing.unit}px 0`,
  },
  inputProps: {
    width: '100%',
  },
});

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'email',
    'password',
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

// eslint-disable-next-line react/prefer-stateless-function
class Signin extends Component {
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
                Sign in
              </Typography>
              <div className={classes.textFieldContainer}>
                <Field
                  name='email'
                  component={renderTextField}
                  label='Email'
                  className={classes.inputProps}
                />
              </div>
              <div className={classes.textFieldContainer}>
                <Field
                  name='password'
                  component={renderTextField}
                  label='Password'
                  className={classes.inputProps}
                />
              </div>
            </CardContent>
            <CardActions className={classes.cardActions} disableActionSpacing>
              <Button
                classes={{
                  root: classes.signup,
                }}
                onClick={onGoToInstead}
              >
                Create account
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

Signin.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  onGoToInstead: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired, // redux-form
  submitting: PropTypes.bool.isRequired, // redux-form
  valid: PropTypes.bool.isRequired, // redux-form
};

const SigninWithStyles = withStyles(styles)(Signin);

export default reduxForm({
  form: 'LoginForm',
  validate,
})(SigninWithStyles);

