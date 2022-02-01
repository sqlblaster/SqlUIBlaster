import {
  Column,
  Table
} from 'src/App/DataSourceConstructor/schemas';
import { ColumnBranch } from '../../../../../common/ColumnSelector/ColumnItem/SelectedColumn.models';

export const getEnums = (
  tables: Table[],
  columnBranch: ColumnBranch
): Column['enums'] => {
  const { tableName, columnName } = columnBranch;
  let enums: Column['enums'];

  const table = tables.find(t => t.name === tableName);
  let column: Column | undefined;
  table && (column = table.columns.find(c => c.name === columnName));
  column && (enums = column.enums);

  return enums;
};
