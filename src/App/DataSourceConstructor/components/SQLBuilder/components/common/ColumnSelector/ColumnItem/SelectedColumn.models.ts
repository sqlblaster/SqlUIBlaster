import { Column } from 'src/App/DataSourceConstructor/schemas';

export type ColumnBranchFields = Pick<
  ColumnBranch,
  'tableName' | 'columnName' | 'type' | 'foreignColumn'
>;

export class ColumnBranch {
  public get foreignTableName(): ColumnBranch['_foreignTableName'] {
    return this._foreignTableName && this._foreignTableName.toLowerCase();
  }
  public set foreignTableName(value: ColumnBranch['_foreignTableName']) {
    this._foreignTableName = value && value.toLowerCase();
    this.foreignModelName = value;
  }
  public get lastColumn(): ColumnBranch {
    return !this._lastColumn ? this : this._lastColumn;
  }
  public set lastColumn(value: ColumnBranch) {
    this._lastColumn = value === this ? undefined : value;
  }
  public tableName: string = '';
  public modelName: string = '';
  public columnName: string = '';
  public type: Column['type'];

  public foreignColumn: ColumnBranch | undefined;
  public foreignModelName: Column['foreignModelName'];

  private _foreignTableName: Column['foreignTableName'];
  private _lastColumn: ColumnBranch | undefined;

  constructor(...inits: Partial<ColumnBranch>[]) {
    Object.assign(this, ...inits);
  }

  public hasZeroColumnLevel() {
    return this === this.lastColumn;
  }

  public normalizeLastColumn() {
    this.lastColumn = this.lookForLastColumn(this);

    return this;
  }

  public lookForLastColumn = (column: ColumnBranch = this): ColumnBranch => {
    if (column.foreignColumn) {
      return this.lookForLastColumn(column.foreignColumn);
    }

    return column;
  }

  public normalize() {
    this.normalizeColumn();
    this.normalizeLastColumn();

    return this;
  }

  public normalizeColumn = (columnBranch: ColumnBranch = this) => {
    if (columnBranch.foreignColumn) {
      columnBranch.foreignColumn = this.normalizeColumn(
        columnBranch.foreignColumn
      );
    }

    return !(columnBranch instanceof ColumnBranch)
      ? new ColumnBranch(columnBranch)
      : columnBranch;
  }

  public equals(column: ColumnBranch): boolean {
    if (
      !this.areFieldsMatch('columnName', column) ||
      !this.areFieldsMatch('tableName', column) ||
      !this.areFieldsMatch('type', column)
    ) {
      return false;
    }

    if (this.foreignColumn && column.foreignColumn) {
      if (!this.foreignColumn.equals(column.foreignColumn)) {
        return false;
      }
    } else if (this.foreignColumn || column.foreignColumn) {
      return false;
    }

    return true;
  }

  public areFieldsMatch(
    fieldName: keyof ColumnBranch,
    column: ColumnBranch
  ): boolean {
    return this[fieldName] === column[fieldName];
  }

  public toJSON() {
    return {
      columnName: this.columnName,
      tableName: this.tableName,
      modelName: this.modelName,
      type: this.type,
      foreignColumn: this.foreignColumn,
      foreignModelName: this.foreignModelName,
      foreignTableName: this.foreignTableName,
      _foreignTableName: this._foreignTableName,
      _lastColumn: this._lastColumn
    };
  }
}
