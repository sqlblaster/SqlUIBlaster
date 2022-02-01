import * as uuid from 'uuid';
import { ColumnBranch } from '../../../common/ColumnSelector/ColumnItem/SelectedColumn.models';

export class Grouping {
  public id: string;
  // TODO: rename column to columnBranch
  public column: ColumnBranch;

  constructor(...inits: Partial<Grouping>[]) {
    Object.assign(this, ...inits);

    if (!this.id) {
      this.id = uuid();
    }
  }
}
