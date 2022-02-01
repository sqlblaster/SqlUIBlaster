import { Join, JoinTable } from './models/Join';
import { TreeTable } from './models/TreeTable';

export const fillJoins = (treeTable: TreeTable): Join[] => {
  const joins: Join[] = [];

  const { foreignTreeTables, foreignColumns } = treeTable;

  foreignTreeTables &&
    foreignTreeTables.forEach((foreignTable, index) => {
      const foreignKeyColumn = foreignColumns[index];
      const join = new Join({
        primaryTable: new JoinTable(treeTable, {
          keyColumn: foreignKeyColumn
        }),
        foreignTable: new JoinTable(foreignTable, {
          keyColumn: foreignTable.primaryKeyColumn
        })
      });
      joins.push(join);

      if (foreignTable.foreignTreeTables && foreignTable.foreignTreeTables.length) {
        const foreignJoins = fillJoins(foreignTable);
        joins.push(...foreignJoins);
      }
    });

  return joins;
};
