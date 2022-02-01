import { DateOperation } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/DateMutator/DateOperation';
import { FilterAliased } from '../../JOIN/models/ColumnAliased';
import { getColumnString } from '../utils';
import { expressionReducersByOperator } from './expression-reducers';

export const generateDateOperation = (filter: FilterAliased): string => {
  const {
    column: { lastColumn: column },
    variables
  } = filter;
  const { operator, operands } = filter.operation as DateOperation;

  return expressionReducersByOperator[operator](
    getColumnString(column),
    operands,
    variables
  );
};
