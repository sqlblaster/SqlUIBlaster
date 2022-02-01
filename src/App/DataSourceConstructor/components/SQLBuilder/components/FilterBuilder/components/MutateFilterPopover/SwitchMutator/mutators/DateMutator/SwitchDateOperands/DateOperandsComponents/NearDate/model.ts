import { IDateOperation } from '../../../DateOperation';
import { PluralDateComponent } from './plural-date-components';

export class NearDateOperands {
  public shiftAmount: number = 30;
  public dateComponentType: PluralDateComponent = 'Days';
  public includeCurrentDate: boolean = false;

  constructor(...inits: Partial<NearDateOperands>[]) {
    Object.assign(this, ...inits);
  }
}

export class NearDateOperation implements IDateOperation<NearDateOperands> {
  public operator: 'Previous' | 'Next' = 'Previous';
  public operands = new NearDateOperands();
  public type: 'Date' = 'Date';

  constructor(...inits: Partial<NearDateOperation>[]) {
    Object.assign(this, ...inits);
  }
}
