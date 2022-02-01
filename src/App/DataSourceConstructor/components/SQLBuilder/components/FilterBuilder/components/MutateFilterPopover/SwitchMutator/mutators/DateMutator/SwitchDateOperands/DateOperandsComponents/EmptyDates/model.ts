import { IDateOperation } from '../../../DateOperation';

export class EmptyDateOperation implements IDateOperation<undefined> {
  public operator: 'Is empty' | 'Is not empty' = 'Is empty';
  public operands: undefined;
  public type: 'Date' = 'Date';

  constructor(...inits: Partial<EmptyDateOperation>[]) {
    Object.assign(this, ...inits);
  }
}
