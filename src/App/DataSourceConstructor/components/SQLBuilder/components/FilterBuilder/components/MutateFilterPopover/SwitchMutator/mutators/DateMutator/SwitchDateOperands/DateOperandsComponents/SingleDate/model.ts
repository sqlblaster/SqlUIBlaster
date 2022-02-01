import { IDateOperation } from '../../../DateOperation';
import { FixedDateOperands } from '../../DatePickerByOperandsType/components/FixedDatePicker/model';
import { RelativeDateOperands } from '../../DatePickerByOperandsType/components/RelativeDatePicker/model';
import { VariableDateOperands } from '../../DatePickerByOperandsType/components/VariableDatePicker/model';
import { DateType } from '../../DatePickerByOperandsType/date-operand-types';

export interface ISingleDateOperands {
  dateType: DateType;
}

export type SingleDateOperands =
  | FixedDateOperands
  | RelativeDateOperands
  | VariableDateOperands;

export class SingleDateOperation implements IDateOperation<SingleDateOperands> {
  public operator: 'Before' | 'After' | 'On' = 'Before';
  public operands: SingleDateOperands = new FixedDateOperands();
  public type: 'Date' = 'Date';

  constructor(...inits: Partial<SingleDateOperation>[]) {
    Object.assign(this, ...inits);
  }
}
