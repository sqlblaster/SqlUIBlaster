import { BooleanOperation } from '../../../../../SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/BooleanMutator/BooleanOperation';
import { FilterAliased } from '../../JOIN/models/ColumnAliased';
import { getColumnString } from '../utils';
import { expressionReducersByOperator } from './expression-reducers';

export const generateBooleanOperation = (filter: FilterAliased): string => {
  const column = filter.column.lastColumn;
  const { operator } = filter.operation as BooleanOperation;

  return expressionReducersByOperator[operator](getColumnString(column), undefined);
};
