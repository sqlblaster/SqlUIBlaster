import { FilterAliased } from '../../JOIN/models/ColumnAliased';
import { getColumnString } from '../utils';

export const generateDrillDownOperation = (filter: FilterAliased): string => {
  const column = filter.column.lastColumn;

  return `${getColumnString(column)}::text IS NOT DISTINCT FROM $${
    filter.operation.operands
  }`;
};
