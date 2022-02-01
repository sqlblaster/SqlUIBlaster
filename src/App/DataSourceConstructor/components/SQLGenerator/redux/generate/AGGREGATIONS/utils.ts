import { ColumnBranchAliased } from '../JOIN/models/ColumnAliased';

export const getAlias = (
  columnBranch: ColumnBranchAliased | undefined,
  operator: string
): string => {
  let alias = operator;

  if (columnBranch) {
    const {
      lastColumn: { tableAlias, columnName }
    } = columnBranch;

    alias += ` ${
      columnBranch.hasZeroColumnLevel() ? columnName : `${columnName} (${tableAlias})`}`;
  }

  return alias;
};
