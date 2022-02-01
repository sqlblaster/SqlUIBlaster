import { Aggregation } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/AggregationsBuilder/components/AggregationItem/model';
import { ColumnBranch } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { Filter } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/FilterItem/model';
import { Grouping } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/GroupingsBuilder/components/GroupingItem/model';
import { Order } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/OrdersBuilder/components/OrderItem/model';
import { CustomColumn } from '../../../../../SQLBuilder/components/CustomColumnsBuilder/components/CustomColumnItem/model';

export class ColumnBranchAliased extends ColumnBranch {
  public tableAlias: string = '';
  public lastColumn: ColumnBranchAliased;
  public foreignColumn: ColumnBranchAliased;

  constructor(...inits: Partial<ColumnBranch | ColumnBranchAliased>[]) {
    super(...inits);
    Object.assign(this, ...inits);
  }
}

export interface IAliased {
  column: ColumnBranchAliased | undefined;
}

export interface IHasColumn {
  column: ColumnBranch | undefined;
}

export class CustomColumnAliased extends CustomColumn implements IAliased {
  public column: ColumnBranchAliased;

  constructor(...inits: Partial<CustomColumn>[]) {
    super(...inits);
    Object.assign(this, ...inits);
  }
}

export class FilterAliased extends Filter implements IAliased {
  public column: ColumnBranchAliased;

  constructor(...inits: Partial<Filter>[]) {
    super(...inits);
    Object.assign(this, ...inits);
  }
}

export class AggregationAliased extends Aggregation implements IAliased {
  public column: ColumnBranchAliased | undefined;

  constructor(...inits: Partial<Aggregation>[]) {
    super(...inits);
    Object.assign(this, ...inits);
  }
}

export class GroupingAliased extends Grouping implements IAliased {
  public column: ColumnBranchAliased;

  constructor(...inits: Partial<Grouping>[]) {
    super(...inits);
    Object.assign(this, ...inits);
  }
}

export class OrderAliased extends Order implements IAliased {
  public column: ColumnBranchAliased;

  constructor(...inits: Partial<Order>[]) {
    super(...inits);
    Object.assign(this, ...inits);
  }
}
