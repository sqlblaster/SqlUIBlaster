import { ColumnBranchAliased } from '../JOIN/models/ColumnAliased';

export const getColumnAlias = (columnBranch: ColumnBranchAliased): string => {
  const {
    lastColumn: { columnName, tableAlias }
  } = columnBranch;

  return `AS "${columnName} (${tableAlias})"`;
};
