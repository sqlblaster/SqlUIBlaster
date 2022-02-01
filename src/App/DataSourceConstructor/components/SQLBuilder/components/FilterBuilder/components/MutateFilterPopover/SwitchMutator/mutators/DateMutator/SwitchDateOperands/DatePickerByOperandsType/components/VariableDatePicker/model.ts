import { ISingleDateOperands } from '../../../DateOperandsComponents/SingleDate/model';

export class VariableDateOperands implements ISingleDateOperands {
  public dateType: 'Variable date' = 'Variable date';

  constructor(...inits: Partial<VariableDateOperands>[]) {
    Object.assign(this, ...inits);
  }
}
