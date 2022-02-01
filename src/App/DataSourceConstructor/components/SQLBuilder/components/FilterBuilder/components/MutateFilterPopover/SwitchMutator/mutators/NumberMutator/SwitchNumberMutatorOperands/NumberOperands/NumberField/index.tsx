import { TextField } from '@material-ui/core';
import { InputBaseComponentProps } from '@material-ui/core/InputBase';
import { TextFieldProps } from '@material-ui/core/TextField';
import * as React from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';

export const NumberInputComponent: React.FC<InputBaseComponentProps> = ({
  defaultValue,
  ...otherProps
}) => {
  return (
    <NumberFormat {...otherProps} thousandSeparator='' decimalSeparator='.' />
  );
};

export type NumberFieldProps = TextFieldProps &
  Pick<NumberFormatProps, 'onValueChange'>;

export const NumberField: React.FC<NumberFieldProps> = ({
  onValueChange,
  ...otherProps
}) => {
  return (
    <TextField
      {...otherProps}
      InputProps={{
        inputComponent: NumberInputComponent,
        inputProps: {
          onValueChange
        }
      }}
    />
  );
};
