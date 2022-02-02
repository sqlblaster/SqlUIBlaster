import moment from 'moment';
import { RemoveButtonProps } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/common/Icons/RemoveButton';
import { ClassesProp } from 'src/App/utils/classes-prop';
import { FixedDatePickerClassKeys } from './styles';

export interface DateLimits {
  minDate?: Date;
  maxDate?: Date;
  minDateMessage?: string;
  maxDateMessage?: string;
}

export interface FixedDatePickerProps {
  date: Date;
  timeEnabled: boolean;
  limits?: DateLimits;
  onDateChange: (date: Date) => void;
  onTimeEnabledChange: (timeEnabled: boolean) => void;
}

export interface IFixedDatePickerHandlers {
  handleDateChange: (date: moment.Moment) => void;
  handleAddTimeClick: () => void;
  handleRemoveTimeClick: RemoveButtonProps['onClick'];
}

export type FixedDatePickerViewProps = FixedDatePickerProps &
  IFixedDatePickerHandlers &
  ClassesProp<FixedDatePickerClassKeys>;
