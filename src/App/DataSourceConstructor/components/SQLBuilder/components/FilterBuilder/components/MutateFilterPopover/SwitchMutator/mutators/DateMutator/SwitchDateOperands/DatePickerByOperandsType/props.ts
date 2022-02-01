import { SelectProps } from '@material-ui/core/Select';
import { SingleDateOperands } from '../DateOperandsComponents/SingleDate/model';
import { FixedDatePickerProps } from './components/FixedDatePicker/props';
import { RelativeDatePickerProps } from './components/RelativeDatePicker';
import { VariableDatePickerOwnProps } from './components/VariableDatePicker/props';

export type DatePickerByOperandsTypeProps = VariableDatePickerOwnProps &
  Pick<FixedDatePickerProps, 'limits'> & {
    operands: SingleDateOperands;
    onOperandsChange: (operands: SingleDateOperands) => void;
  };

export interface IDatePickerByOperandsTypeHandlers {
  handleDateTypeChange: SelectProps['onChange'];
  handleDateChange: FixedDatePickerProps['onDateChange'];
  handleTimeEnabledChange: FixedDatePickerProps['onTimeEnabledChange'];
  handleRelativeDateChange: RelativeDatePickerProps['onRelativeDateChange'];
}

export type DatePickerByOperandsTypeViewProps = DatePickerByOperandsTypeProps &
  IDatePickerByOperandsTypeHandlers;
