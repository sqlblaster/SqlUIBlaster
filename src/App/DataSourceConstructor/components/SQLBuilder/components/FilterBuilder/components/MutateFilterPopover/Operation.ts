import { DrillDownOperation } from '../../../../../SQLGenerator/redux/generate/WHERE/drill-down/model';
import { BooleanOperation } from './SwitchMutator/mutators/BooleanMutator/BooleanOperation';
import { DateOperation } from './SwitchMutator/mutators/DateMutator/DateOperation';
import { ForeignColumnOperation } from './SwitchMutator/mutators/ForeignColumnMutator/ForeignColumnOperation';
import { NumberOperation } from './SwitchMutator/mutators/NumberMutator/NumberOperation';
import { StringOperation } from './SwitchMutator/mutators/StringMutator/StringOperation';

export type Operation =
  | NumberOperation
  | StringOperation
  | DateOperation
  | ForeignColumnOperation
  | BooleanOperation
  | DrillDownOperation;

export interface IOperation<
  TOperationType extends OperationType,
  TOperands extends Operation['operands']
> {
  operator: string;
  operands: TOperands;
  type: TOperationType;
}

export type OperationType =
  | 'Number'
  | 'String'
  | 'Date'
  | 'Boolean'
  | 'Foreign'
  | 'DrillDown';
