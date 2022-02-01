import * as uuid from 'uuid';
import { ColumnBranch } from '../../../common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { SortOrder } from './orders';

export class Order {
  public id: string;
  public column: ColumnBranch;
  public sortOrderCode: 'ASC' | 'DESC' = 'ASC';
  private _sortOrder: SortOrder = 'ascending';
  get sortOrder(): Order['_sortOrder'] {
    return this._sortOrder;
  }
  set sortOrder(value: Order['_sortOrder']) {
    this._sortOrder = value;
    this.sortOrderCode = value === 'ascending' ? 'ASC' : 'DESC';
  }

  constructor(...inits: Partial<Order>[]) {
    Object.assign(this, ...inits);

    if (!this.id) {
      this.id = uuid();
    }
  }
}
