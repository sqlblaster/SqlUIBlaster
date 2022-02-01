import { ISingleDateOperands } from '../../../DateOperandsComponents/SingleDate/model';

export class FixedDateOperands implements ISingleDateOperands {
  public date: Date = new Date(new Date().setHours(0, 0, 0, 0));
  public timeEnabled: boolean = false;
  public dateType: 'Fixed date' = 'Fixed date';

  constructor(...inits: Partial<FixedDateOperands>[]) {
    Object.assign(this, ...inits);
  }
}
