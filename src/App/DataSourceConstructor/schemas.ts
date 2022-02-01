// TODO: Move everything below to the separate files to the types folder if this will be more than one display size
export class DatabaseSchema {
  public tables: Table[] = [];

  constructor(...inits: Partial<DatabaseSchema>[]) {
    Object.assign(this, ...inits);
  }
}

export class Table {
  public columns: Column[] = [];
  public primaryKeyColumn: string = '';
  public modelName: string;
  private _name: string = '';
  public get name(): Table['_name'] {
    return this._name;
  }
  public set name(value: Table['_name']) {
    this._name = value.toLowerCase();
    this.modelName = value;
  }

  constructor(...inits: Partial<Table>[]) {
    Object.assign(this, ...inits);
    this.findOutPrimaryKeyColumn();
  }

  private findOutPrimaryKeyColumn() {
    const primaryKeyColumn = this.columns.find(
      column => column.type === 'primary'
    );
    primaryKeyColumn && (this.primaryKeyColumn = primaryKeyColumn.name);
  }
}

export class Column {
  public name: string = '';
  public type: 'string' | 'number' | 'Date' | 'boolean' | 'uuid' | 'primary';
  public enums: string[] | undefined;
  public foreignModelName: string | undefined;
  public _foreignTableName: string | undefined;
  public get foreignTableName(): Column['_foreignTableName'] {
    return this._foreignTableName && this._foreignTableName.toLowerCase();
  }
  public set foreignTableName(value: Column['_foreignTableName']) {
    this._foreignTableName = value && value.toLowerCase();
    this.foreignModelName = value;
  }

  constructor(...inits: Partial<Column>[]) {
    Object.assign(this, ...inits);
  }
}
