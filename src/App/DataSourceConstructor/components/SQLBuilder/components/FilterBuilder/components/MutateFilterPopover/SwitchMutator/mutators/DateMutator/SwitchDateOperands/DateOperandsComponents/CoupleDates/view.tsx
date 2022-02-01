import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { DatePickerByOperandsType } from '../../DatePickerByOperandsType';
import { CoupleDateViewProps } from './props';
import { coupleDateStyles } from './styles';

export const CoupleDate = withStyles(coupleDateStyles)((({
  operatorView,
  operands,
  pickedVariables,
  classes,
  handleVariablePick,
  handleOperandsChange
}) => {
  return (
    <>
      <div className={classes.root}>
        {operatorView}
        <div className={classes.dates}>
          <div className={classes.date} data-testid='between-operand-1'>
            <DatePickerByOperandsType
              operands={operands[0]}
              onOperandsChange={handleOperandsChange(0)}
              variable={pickedVariables[0]}
              onVariablePicked={handleVariablePick(0)}
              limits={
                operands[1].dateType === 'Fixed date'
                  ? {
                      maxDate: operands[1].date,
                      maxDateMessage:
                        'Couldn\'t set time, because selected date is later than second date'
                    }
                  : undefined
              }
            />
          </div>
          <div className={classes.date} data-testid='between-operand-2'>
            <DatePickerByOperandsType
              operands={operands[1]}
              onOperandsChange={handleOperandsChange(1)}
              variable={pickedVariables[1]}
              onVariablePicked={handleVariablePick(1)}
              limits={
                operands[0].dateType === 'Fixed date'
                  ? {
                      minDate: operands[0].date,
                      minDateMessage:
                        'Couldn\'t set time, because selected date is earlier than first date'
                    }
                  : undefined
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}) as React.FC<CoupleDateViewProps>);
