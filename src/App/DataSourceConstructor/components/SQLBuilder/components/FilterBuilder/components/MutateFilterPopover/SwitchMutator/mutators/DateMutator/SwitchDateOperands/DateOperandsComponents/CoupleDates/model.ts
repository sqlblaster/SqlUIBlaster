import { IDateOperation } from '../../../DateOperation';
import { FixedDateOperands } from '../../DatePickerByOperandsType/components/FixedDatePicker/model';
import { SingleDateOperands } from '../SingleDate/model';

export class CoupleDateOperation implements IDateOperation<CoupleDateOperands> {
  public operator: 'Between' = 'Between';
  public operands: CoupleDateOperands = [
    new FixedDateOperands(),
    new FixedDateOperands()
  ];
  public type: 'Date' = 'Date';

  constructor(...inits: Partial<CoupleDateOperation>[]) {
    Object.assign(this, ...inits);
  }
}

export type CoupleDateOperands = [SingleDateOperands, SingleDateOperands];
