import { Table } from 'src/App/DataSourceConstructor/schemas';
import { ColumnBranchAliased } from './models/ColumnAliased';
import { TreeTable } from './models/TreeTable';

/**
 * Also set table aliases of column branches
 */
export const constructTreeTable = (
  columnBranches: ColumnBranchAliased[],
  originalTables: Table[]
): TreeTable => {
  TreeTable.resetAliasesCountMap();

  const rootTreeTable = new TreeTable();

  columnBranches.forEach(columnBranch => {
    constructTreeTableItem(rootTreeTable, columnBranch, originalTables);
  });

  return rootTreeTable;
};

export const constructTreeTableItem = (
  treeTable: TreeTable,
  columnBranch: ColumnBranchAliased,
  originalTables: Table[]
) => {
  if (!treeTable.name && columnBranch.tableName) {
    treeTable.setName(columnBranch.tableName);
    treeTable.setAlias();
  }

  treeTable.setPrimaryKeyColumn(originalTables);

  columnBranch.tableAlias = treeTable.alias;

  if (columnBranch.foreignColumn) {
    const foreignColumnBranch = columnBranch.foreignColumn;
    let foreignTreeTable = treeTable.foreignTreeTables.find(
      ft =>
        ft.name === foreignColumnBranch.tableName &&
        columnBranch.columnName === ft.parentColumnName
    );
    if (!foreignTreeTable) {
      foreignTreeTable = new TreeTable({
        parentColumnName: columnBranch.columnName
      });
      treeTable.addForeignColumn(columnBranch.columnName);
      treeTable.addForeignTable(foreignTreeTable);
    }

    constructTreeTableItem(foreignTreeTable, foreignColumnBranch, originalTables);
  }
};
