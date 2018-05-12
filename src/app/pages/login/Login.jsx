import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import renderTextField from '../../../common/components/form/TextField';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  onSubmit: PropTypes.func.isRequired,

  // redux-form
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
};

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
  card: {
    padding: 16,
    width: 450,
  },
  headline: {
    marginBottom: 24,
  },
  cardActions: {
    flexDirection: 'row-reverse',
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
class Login extends Component {
  render() {
    const {
      classes,
      handleSubmit,
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
                <Field name='email' component={renderTextField} label='Email' className={classes.inputProps} />
              </div>
              <div className={classes.textFieldContainer}>
                <Field name='password' component={renderTextField} label='Password' className={classes.inputProps} />
              </div>
            </CardContent>
            <CardActions className={classes.cardActions} disableActionSpacing>
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

Login.propTypes = propTypes;

const LoginWithStyles = withStyles(styles)(Login);

export default reduxForm({
  form: 'LoginForm',
  validate,
})(LoginWithStyles);

