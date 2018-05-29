// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
  input: {},
  meta: {
    touched: boolean,
    error?: string,
  },
  label: string,
};

const renderTextField = ({
  input,
  label,
  meta,
  ...custom
}: Props) => (
  <TextField
    label={label}
    error={meta.touched && meta.error && meta.error !== ''}
    helperText={meta.touched && meta.error}
    {...input}
    {...custom}
  />
);

export default renderTextField;
