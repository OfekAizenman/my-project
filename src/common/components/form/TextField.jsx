import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const propTypes = {
  input: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({}).isRequired,
  label: PropTypes.string.isRequired,
};

const renderTextField = ({
  input,
  label,
  meta,
  ...custom
}) => (
  <TextField
    label={label}
    error={meta.touched && meta.error && meta.error !== ''}
    helperText={meta.touched && meta.error}
    {...input}
    {...custom}
  />
);

renderTextField.propTypes = propTypes;
export default renderTextField;
