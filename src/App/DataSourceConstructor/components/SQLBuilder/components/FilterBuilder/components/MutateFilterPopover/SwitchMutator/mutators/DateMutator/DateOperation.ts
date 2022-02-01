import { DateOperator } from './operators';
import { CoupleDateOperation } from './SwitchDateOperands/DateOperandsComponents/CoupleDates/model';
import { EmptyDateOperation } from './SwitchDateOperands/DateOperandsComponents/EmptyDates/model';
import { NearDateOperation } from './SwitchDateOperands/DateOperandsComponents/NearDate/model';
import { SingleDateOperation } from './SwitchDateOperands/DateOperandsComponents/SingleDate/model';

export type DateOperation =
  | NearDateOperation
  | SingleDateOperation
  | CoupleDateOperation
  | EmptyDateOperation;

export interface IDateOperation<
  TDateOperands extends DateOperation['operands']
> {
  operator: DateOperator;
  operands: TDateOperands;
  type: 'Date';
}
