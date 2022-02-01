import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { DatePickerByOperandsType } from '../../DatePickerByOperandsType';
import { SingleDateViewProps } from './props';
import { singleDateStyles } from './styles';

// TODO: strech selects to the full available width
export const SingleDate = withStyles(singleDateStyles)((({
  operatorView,
  operands,
  classes,
  pickedVariables,
  handleVariablePicked,
  handleOperandsChange
}) => (
  <div className={classes.root}>
    {operatorView}
    <DatePickerByOperandsType
      operands={operands}
      onOperandsChange={handleOperandsChange}
      variable={pickedVariables}
      onVariablePicked={handleVariablePicked}
    />
  </div>
)) as React.FC<SingleDateViewProps>);
