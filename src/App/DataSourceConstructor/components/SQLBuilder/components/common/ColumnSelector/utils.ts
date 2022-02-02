import { clone } from 'ramda';
import { Column } from 'src/App/DataSourceConstructor/schemas';
import { ColumnBranch } from './ColumnItem/SelectedColumn.models';
import { ColumnSelectorOwnProps } from './props';

export const getRootTableBranch = (tableName: string, modelName: string) =>
  new ColumnBranch({ tableName, modelName });

export const getNewColumnBranch = (
  tableBranch: ColumnBranch,
  { name, type, foreignTableName, foreignModelName }: Column
) => {
  const newColumnBranch = new ColumnBranch(clone(tableBranch));

  const lastColumn = newColumnBranch.lastColumn;
  lastColumn.columnName = name;
  lastColumn.type = type;
  lastColumn.foreignTableName = foreignTableName;
  lastColumn.foreignModelName = foreignModelName;

  return newColumnBranch;
};

export const sortInOrderForeignColumnsBelow = (columns: Column[]) =>
  columns.sort((c1, c2) => +!!c1.foreignTableName - +!!c2.foreignTableName);

export const filterColumns = (
  columns: Column[],
  canShowColumnBranch: Required<ColumnSelectorOwnProps>['canShowColumnBranch'],
  tableBranch: ColumnBranch
): Column[] => {
  return columns.filter(
    column =>
      canShowColumnBranch(getNewColumnBranch(tableBranch, column)) ||
      column.foreignTableName
  );
};
