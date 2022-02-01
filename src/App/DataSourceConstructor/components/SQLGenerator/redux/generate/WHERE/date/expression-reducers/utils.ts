import * as moment from 'moment';
import { PluralDateComponent } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/DateMutator/SwitchDateOperands/DateOperandsComponents/NearDate/plural-date-components';
import { RelativeDate } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/DateMutator/SwitchDateOperands/DatePickerByOperandsType/components/RelativeDatePicker/singular-date-components';

export type Format = 'date' | 'timestamp';

export const DateComponentToFormatMap: {
  [K in PluralDateComponent]: string
} = {
  Years: 'YYYY',
  Months: 'MM',
  Weeks: 'WW',
  Days: 'DD',
  Hours: 'HH24',
  Minutes: 'MI',
  Seconds: 'SS'
};

export const truncDate = (
  dateComponent: PluralDateComponent,
  date: Date | string
): string => {
  return `date_trunc('${dateComponent}', (${
    date instanceof Date ? toSqlDate(date) : date
  })::timestamp)`;
};

export const toSqlDate = (date: Date | string = 'now()') => {
  return date instanceof Date
    ? `'${moment(date).format('YYYY-MM-DD HH:mm:ss')}'`
    : date;
};

export type DateParam = Parameters<typeof toSqlDate>[0];

export const addDateSql = (
  shiftAmount: number,
  dateComponent: PluralDateComponent,
  date: DateParam = 'now()'
): string => {
  return `${toSqlDate(date)} + INTERVAL '${shiftAmount} ${dateComponent}'`;
};

export const getRelativeDateSqlExp = (relativeDate: RelativeDate): string => {
  switch (relativeDate) {
    case 'Today':
      return `now()::date`;
    case 'Beginning of the current week':
      return `date_trunc('week', now())`;
    case 'End of the current week':
      return `(
        date_trunc('week', now()) + interval '6 days'
      )`;
    case 'Beginning of the current month':
      return `date_trunc('month', now())`;
    case 'End of the current month':
      return `(
        date_trunc('month', now()) + interval '1 month - 1 day'
      )`;
    case 'Beginning of the current quarter':
      return `date_trunc('quarter', now())`;
    case 'End of the current quarter':
      return `(
        date_trunc('quarter', now()) + interval '3 month - 1 day'
      )`;
    case 'Beginning of the current year':
      return `date_trunc('year', now())`;
    case 'End of the current year':
      return `(
        date_trunc('year', now()) + interval '1 year - 1 day'
      )`;
    default:
      throw new Error('invalid relative date');
  }
};
