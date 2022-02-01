import * as React from 'react';
import {
  FixedDatePickerProps,
  FixedDatePickerViewProps as ViewProps,
  IFixedDatePickerHandlers
} from './props';
import { FixedDatePicker as View } from './view';

export class FixedDatePicker extends React.Component<FixedDatePickerProps>
  implements IFixedDatePickerHandlers {
  public handleDateChange: ViewProps['handleDateChange'] = date => {
    this.props.onDateChange(date.toDate());
  }

  public handleAddTimeClick: ViewProps['handleAddTimeClick'] = () => {
    const { date, onDateChange, onTimeEnabledChange } = this.props;
    onDateChange(date);
    onTimeEnabledChange(true);
  }

  public handleRemoveTimeClick: ViewProps['handleRemoveTimeClick'] = event => {
    event.stopPropagation();
    this.props.onTimeEnabledChange(false);
  }

  public render() {
    return (
      <>
        <View
          {...this.props}
          handleDateChange={this.handleDateChange}
          handleAddTimeClick={this.handleAddTimeClick}
          handleRemoveTimeClick={this.handleRemoveTimeClick}
        />
      </>
    );
  }
}
