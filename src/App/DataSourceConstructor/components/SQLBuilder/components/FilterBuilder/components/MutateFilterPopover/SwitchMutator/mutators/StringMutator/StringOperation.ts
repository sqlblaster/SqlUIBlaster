import { IOperation } from '../../../Operation';
import { StringOperator } from './operators';

export class StringOperation implements IOperation<'String', StringOperands> {
  public operator: StringOperator = 'Is';
  public operands: StringOperands = '';
  public caseSensitive: boolean = false; // TODO: Move this field to operands field
  public type: 'String' = 'String';

  constructor(...inits: Partial<StringOperation>[]) {
    Object.assign(this, ...inits);
  }
}

export type StringOperands = string;
