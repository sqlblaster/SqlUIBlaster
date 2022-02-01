import { NumberOperation } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/NumberMutator/NumberOperation';
import { FilterAliased } from '../../JOIN/models/ColumnAliased';
import { getColumnString } from '../utils';
import { expressionReducersByOperator } from './expression-reducers';

export const generateNumberOperation = (filter: FilterAliased): string => {
  const column = filter.column.lastColumn;
  const { operator, operands } = filter.operation as NumberOperation;

  return expressionReducersByOperator[operator](
    getColumnString(column),
    operands
  );
};
