import { GraphNode } from 'src/schema';
import { IOperation, Operation } from '../../../Operation';

export class ForeignColumnOperation implements IOperation<'Foreign', ForeignColumnOperand> {
  public operator: 'ForeignColumnOperator' = 'ForeignColumnOperator';
  public operands: ForeignColumnOperand;
  public type: 'Foreign' = 'Foreign';

  constructor(...inits: Partial<ForeignColumnOperation>[]) {
    Object.assign(this, ...inits);
  }
}

export type ForeignColumnOperand = GraphNode | undefined;
