import * as uuid from 'uuid';
import { ColumnBranch } from '../../../common/ColumnSelector/ColumnItem/SelectedColumn.models';

export class CustomColumn {
  public id: string;
  public column: ColumnBranch;

  constructor(...inits: Partial<CustomColumn>[]) {
    Object.assign(this, ...inits);

    if (!this.id) {
      this.id = uuid();
    }
  }
}
