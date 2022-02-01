import { SingleDateOperands } from '../DateOperandsComponents/SingleDate/model';
import { FixedDateOperands } from './components/FixedDatePicker/model';
import { RelativeDateOperands } from './components/RelativeDatePicker/model';
import { VariableDateOperands } from './components/VariableDatePicker/model';
import { DateType } from './date-operand-types';

export const getNewOperands = (dateType: DateType): SingleDateOperands => {
  switch (dateType) {
    case 'Fixed date':
      return new FixedDateOperands();
    case 'Relative date':
      return new RelativeDateOperands();
    case 'Variable date':
      return new VariableDateOperands();
    default:
      throw new Error('unknown date type is provided');
  }
};
