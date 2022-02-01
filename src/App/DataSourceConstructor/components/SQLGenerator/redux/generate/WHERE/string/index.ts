import { FilterAliased } from '../../JOIN/models/ColumnAliased';
import { getColumnString } from '../utils';
import { expressionReducersByOperator } from './expression-reducers';

export const generateStringOperation = (filter: FilterAliased): string => {
  const column = filter.column.lastColumn;

  if (filter.operation.type === 'String') {
    const { operator, operands, caseSensitive } = filter.operation;
    const variableOrder =
      filter.variables &&
      !(filter.variables instanceof Array) &&
      filter.variables.order;

    return expressionReducersByOperator[operator](
      getColumnString(column),
      operands,
      variableOrder,
      caseSensitive
    );
  } else {
    throw new Error(
      'wrong filter was passed to the string sql filter generator'
    );
  }
};
