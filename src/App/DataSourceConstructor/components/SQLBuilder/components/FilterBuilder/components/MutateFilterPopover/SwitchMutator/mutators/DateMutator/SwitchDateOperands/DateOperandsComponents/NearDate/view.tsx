import { Checkbox, FormControlLabel, TextField, withStyles } from '@material-ui/core';
import * as React from 'react';
import { CheckedSelect } from '../../../../../CheckedSelect';
import { PluralDateComponent, pluralDateComponents } from './plural-date-components';
import { NearDateViewProps } from './props';
import { nearDateStyles } from './styles';
import { getThisDateComponentNotation } from './utils';

export const NearDate = withStyles(nearDateStyles)((({
  operands: { shiftAmount, dateComponentType, includeCurrentDate },
  operatorView,
  classes,
  renderBottomSection,
  handleShiftAmountChange,
  handleDateComponentTypeChange,
  handleIncludeCurrentDateChange
}) => {
  return (
    <>
      <div className={classes['near-date']}>
        {operatorView}
        <TextField
          className={classes['text-field']}
          margin='dense'
          variant='outlined'
          value={shiftAmount}
          onChange={handleShiftAmountChange}
          inputProps={{ type: 'number', className: classes['shift-amount'] }}
        />
        <CheckedSelect<PluralDateComponent>
          selectedItem={dateComponentType}
          items={pluralDateComponents}
          onSelect={handleDateComponentTypeChange}
        />
      </div>
      {renderBottomSection(
        <FormControlLabel
          className={classes.FormControlLabel}
          control={
            <Checkbox
              id={'include-date-checkbox'}
              checked={includeCurrentDate}
              onChange={handleIncludeCurrentDateChange}
              color='primary'
              style={{ padding: '0px' }}
            />
          }
          htmlFor={'include-date-checkbox'}
          label={
            <div className={classes.label}>
              Include
              <span className={classes['date-component']}>
                {` ${getThisDateComponentNotation(dateComponentType)}`}
              </span>
            </div>
          }
        />
      )}
    </>
  );
}) as React.FC<NearDateViewProps>);
