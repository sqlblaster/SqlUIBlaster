export class Join {
  public primaryTable: JoinTable;
  public foreignTable: JoinTable;

  constructor(...inits: Partial<Join>[]) {
    Object.assign(this, ...inits);
  }
}

export class JoinTable {
  public name: string;
  public alias: string;
  public keyColumn: string = 'ID';

  constructor(...inits: Partial<JoinTable>[]) {
    Object.assign(this, ...inits);
  }
}
