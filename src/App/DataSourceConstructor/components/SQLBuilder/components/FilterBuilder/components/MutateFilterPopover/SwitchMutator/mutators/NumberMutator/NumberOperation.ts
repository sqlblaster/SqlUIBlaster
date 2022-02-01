import { IOperation, Operation } from '../../../Operation';
import { NumberOperator } from './operators';

export class NumberOperation implements IOperation<'Number', NumberOperands> {
  public operator: NumberOperator = 'Equal to';
  public operands: NumberOperands = 0;
  public type: 'Number' = 'Number';

  constructor(...inits: Partial<NumberOperation>[]) {
    Object.assign(this, ...inits);
  }
}

export type NumberOperands = number | [number, number] | undefined;
