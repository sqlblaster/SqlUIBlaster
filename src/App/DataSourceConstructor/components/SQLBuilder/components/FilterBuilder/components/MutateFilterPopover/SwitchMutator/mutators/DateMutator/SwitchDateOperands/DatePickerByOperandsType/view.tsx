import { MenuItem, Select } from '@material-ui/core';
import * as React from 'react';
import { FixedDatePicker } from './components/FixedDatePicker';
import { RelativeDatePicker } from './components/RelativeDatePicker';
import { VariableDatePicker } from './components/VariableDatePicker';
import { dateOperandTypes } from './date-operand-types';
import { DatePickerByOperandsTypeViewProps } from './props';

export const DatePickerByOperandsType: React.FC<
  DatePickerByOperandsTypeViewProps
> = props => {
  const {
    operands,
    limits,
    handleDateTypeChange,
    handleDateChange,
    handleTimeEnabledChange,
    handleRelativeDateChange
  } = props;

  return (
    <>
      <Select
        value={operands.dateType}
        onChange={handleDateTypeChange}
        style={{ marginTop: 10 }}
      >
        {dateOperandTypes.map(dateOperandType => (
          <MenuItem key={dateOperandType} value={dateOperandType}>
            {dateOperandType}
          </MenuItem>
        ))}
      </Select>
      {operands.dateType === 'Fixed date' && (
        <FixedDatePicker
          limits={limits}
          {...operands}
          onDateChange={handleDateChange}
          onTimeEnabledChange={handleTimeEnabledChange}
        />
      )}
      {operands.dateType === 'Relative date' && (
        <RelativeDatePicker
          relativeDate={operands.relativeDate}
          onRelativeDateChange={handleRelativeDateChange}
        />
      )}
      {operands.dateType === 'Variable date' && (
        <VariableDatePicker {...props} />
      )}
    </>
  );
};
