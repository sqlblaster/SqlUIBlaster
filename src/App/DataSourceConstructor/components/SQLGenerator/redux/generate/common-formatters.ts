export const formatColumn = (columnName: string, tableAlias: string): string =>
  `"${tableAlias}"."${columnName}"`;
