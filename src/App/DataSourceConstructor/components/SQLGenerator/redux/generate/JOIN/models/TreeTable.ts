import { Table } from 'src/App/DataSourceConstructor/schemas';

export class TreeTable {
  private static aliasesCountMap: { [TableName: string]: number } = {};

  public name: string;
  public parentColumnName: string;
  public alias: string = '';
  public primaryKeyColumn: string = '';
  public foreignColumns: string[] = [];
  public foreignTreeTables: TreeTable[] = [];

  constructor(...inits: Partial<TreeTable>[]) {
    Object.assign(this, ...inits);
  }

  public static resetAliasesCountMap() {
    TreeTable.aliasesCountMap = {};
  }

  public setName(name: string) {
    this.name = name;
  }

  public addForeignColumn(column: string) {
    this.foreignColumns.push(column);
  }

  public addForeignTable(table: TreeTable) {
    this.foreignTreeTables.push(table);
  }

  public setAlias() {
    if (!this.alias) {
      const tableName = this.name;

      if (!TreeTable.aliasesCountMap[tableName]) {
        TreeTable.aliasesCountMap[tableName] = 1;
      } else {
        TreeTable.aliasesCountMap[tableName] += 1;
      }

      const aliasNumber = TreeTable.aliasesCountMap[tableName];

      this.alias = `${tableName}${aliasNumber}`;
    }
  }

  public setPrimaryKeyColumn(originalTables: Table[]) {
    const originalTable = originalTables.find(
      table => table.name === this.name
    );
    originalTable && (this.primaryKeyColumn = originalTable.primaryKeyColumn);
  }
}
