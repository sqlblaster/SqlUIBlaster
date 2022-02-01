import { ISingleDateOperands } from '../../../DateOperandsComponents/SingleDate/model';
import { RelativeDate } from './singular-date-components';

export class RelativeDateOperands implements ISingleDateOperands {
  public dateType: 'Relative date' = 'Relative date';
  public relativeDate: RelativeDate = 'Today';

  constructor(...inits: Partial<RelativeDateOperands>[]) {
    Object.assign(this, ...inits);
  }
}
