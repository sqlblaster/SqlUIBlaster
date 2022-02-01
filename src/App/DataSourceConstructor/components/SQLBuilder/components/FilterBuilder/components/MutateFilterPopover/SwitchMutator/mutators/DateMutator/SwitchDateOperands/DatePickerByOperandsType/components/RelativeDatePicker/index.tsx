import * as React from 'react';
import { CheckedSelect } from '../../../../../../CheckedSelect';
import { RelativeDate, relativeDates } from './singular-date-components';

export interface RelativeDatePickerProps {
  relativeDate: RelativeDate;
  onRelativeDateChange: (relativeDate: RelativeDate) => void;
}

export class RelativeDatePicker extends React.Component<
  RelativeDatePickerProps
> {
  public render() {
    const { relativeDate, onRelativeDateChange } = this.props;

    return (
      <div style={{ marginTop: 10 }}>
        <CheckedSelect<RelativeDate>
          selectedItem={relativeDate}
          items={relativeDates}
          onSelect={onRelativeDateChange}
        />
      </div>
    );
  }
}
