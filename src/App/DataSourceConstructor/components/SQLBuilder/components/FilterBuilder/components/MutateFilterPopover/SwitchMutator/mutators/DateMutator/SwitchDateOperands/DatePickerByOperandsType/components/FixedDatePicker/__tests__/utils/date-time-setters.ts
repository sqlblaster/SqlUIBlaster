import * as moment from 'moment';
import {
  fireEvent,
  getByTestId as getByTestIdOn,
  Matcher,
  MatcherOptions
} from 'react-testing-library';

export type GetByTestId = (
  text: Matcher,
  options?: MatcherOptions | undefined
) => HTMLElement;

export const getDateSetter = (getByTestId: GetByTestId) => (
  date: Date,
  container?: HTMLElement
) => {
  const datePicker = (container
    ? getByTestIdOn(container, 'date-picker-input')
    : getByTestId('date-picker-input')) as HTMLInputElement;

  datePicker.value = moment(date).format('DD/MM/YYYY');
  fireEvent.input(datePicker);
};

export const getTimeSetter = (getByTestId: GetByTestId) => (
  timeStr: string,
  container?: HTMLElement
) => {
  const timePicker = (container
    ? getByTestIdOn(container, 'time-picker-input')
    : getByTestId('time-picker-input')) as HTMLInputElement;

  timePicker.value = timeStr;
  fireEvent.input(timePicker);
};
