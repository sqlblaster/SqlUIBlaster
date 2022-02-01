import { IOperation } from '../../../Operation';
import { BooleanOperator } from './operators';

export class BooleanOperation implements IOperation<'Boolean', undefined> {
  public operator: BooleanOperator = 'Is true';
  public operands: undefined;
  public type: 'Boolean' = 'Boolean';

  constructor(...inits: Partial<BooleanOperation>[]) {
    Object.assign(this, ...inits);
  }
}
