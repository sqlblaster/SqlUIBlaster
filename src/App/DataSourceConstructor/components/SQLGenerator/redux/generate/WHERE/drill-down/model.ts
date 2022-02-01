import { IOperation } from '../../../../../SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/Operation';

export class DrillDownOperation implements IOperation<'DrillDown', number> {
  public operator: 'DrillDownOperator' = 'DrillDownOperator';
  public operands: number = 1;
  public type: 'DrillDown' = 'DrillDown';

  constructor(...inits: Partial<DrillDownOperation>[]) {
    Object.assign(this, ...inits);
  }
}
