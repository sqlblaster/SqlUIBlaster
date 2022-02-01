import { formatColumn } from '../common-formatters';
import { ColumnBranchAliased } from '../JOIN/models/ColumnAliased';

export const getColumnString = ({
  tableAlias,
  columnName
}: ColumnBranchAliased): string => formatColumn(columnName, tableAlias);
