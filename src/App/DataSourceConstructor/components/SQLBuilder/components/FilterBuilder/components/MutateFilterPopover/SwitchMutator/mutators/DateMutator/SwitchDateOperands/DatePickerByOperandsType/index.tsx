import * as React from 'react';
import { FixedDateOperands } from './components/FixedDatePicker/model';
import { RelativeDateOperands } from './components/RelativeDatePicker/model';
import { DateType } from './date-operand-types';
import {
  DatePickerByOperandsTypeProps,
  DatePickerByOperandsTypeViewProps as ViewProps,
  IDatePickerByOperandsTypeHandlers
} from './props';
import { getNewOperands } from './utils';
import { DatePickerByOperandsType as View } from './view';

export class DatePickerByOperandsType
  extends React.Component<DatePickerByOperandsTypeProps>
  implements IDatePickerByOperandsTypeHandlers {
  public handleDateTypeChange: ViewProps['handleDateTypeChange'] = event => {
    const {
      operands: { dateType },
      onOperandsChange
    } = this.props;

    dateType !== event.target.value &&
      onOperandsChange(getNewOperands(event.target.value as DateType));
  }

  public handleDateChange: ViewProps['handleDateChange'] = date => {
    const { operands, onOperandsChange } = this.props;

    operands.dateType === 'Fixed date' &&
      onOperandsChange(new FixedDateOperands(operands, { date }));
  }

  public handleTimeEnabledChange: ViewProps['handleTimeEnabledChange'] = timeEnabled => {
    const { operands, onOperandsChange } = this.props;

    if (operands.dateType === 'Fixed date') {
      const dateWithoutTime = new Date(operands.date);
      dateWithoutTime.setHours(0, 0, 0, 0);

      onOperandsChange(
        new FixedDateOperands(operands, {
          timeEnabled,
          ...(!timeEnabled ? { date: dateWithoutTime } : {})
        })
      );
    }
  }

  public handleRelativeDateChange: ViewProps['handleRelativeDateChange'] = relativeDate => {
    const { operands, onOperandsChange } = this.props;

    operands.dateType === 'Relative date' &&
      onOperandsChange(new RelativeDateOperands({ relativeDate }));
  }

  public render() {
    return (
      <View
        {...this.props}
        handleDateChange={this.handleDateChange}
        handleRelativeDateChange={this.handleRelativeDateChange}
        handleTimeEnabledChange={this.handleTimeEnabledChange}
        handleDateTypeChange={this.handleDateTypeChange}
      />
    );
  }
}
