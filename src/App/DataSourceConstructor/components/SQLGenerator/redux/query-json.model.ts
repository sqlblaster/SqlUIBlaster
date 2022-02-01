import { Aggregation } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/AggregationsBuilder/components/AggregationItem/model';
import { Filter } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/FilterItem/model';
import { Grouping } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/GroupingsBuilder/components/GroupingItem/model';
import { Order } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/OrdersBuilder/components/OrderItem/model';
import { SQLBuilderState } from 'src/App/DataSourceConstructor/components/SQLBuilder/redux/state';
import { GetExcludedFieldsOf } from 'src/App/utils/type-filters';
import { ColumnBranch } from '../../SQLBuilder/components/common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { CustomColumn } from '../../SQLBuilder/components/CustomColumnsBuilder/components/CustomColumnItem/model';
import { RowLimitBuilderState } from '../../SQLBuilder/components/RowLimit/redux/state';

export class QueryJSON
  implements
    GetExcludedFieldsOf<
      Pick<
        SQLBuilderState,
        'selectedTable' | 'operation' | 'canSaveFilter' | 'pickedVariables'
      >,
      SQLBuilderState
    > {
  public customColumns: CustomColumn[] = [];
  public filters: Filter[] = [];
  public aggregations: Aggregation[] = [];
  public groupings: Grouping[] = [];
  public orders: Order[] = [];
  public rowLimit: RowLimitBuilderState['rowLimit'] = 2000;
  public tableName: string = '';

  constructor(...inits: Partial<QueryJSON>[]) {
    Object.assign(this, ...inits);

    this.wrapIntoClasses();
  }

  public wrapIntoClasses() {
    this.filters = this.filters.map(
      filter =>
        new Filter(filter, {
          column: new ColumnBranch(filter.column).normalize()
        })
    );

    this.aggregations = this.aggregations.map(
      aggregation =>
        new Aggregation(aggregation, {
          column: aggregation.column
            ? new ColumnBranch(aggregation.column).normalize()
            : aggregation.column
        })
    );

    this.groupings = this.groupings.map(
      grouping =>
        new Grouping(grouping, {
          column: new ColumnBranch(grouping.column).normalize()
        })
    );

    this.orders = this.orders.map(
      order =>
        new Order(order, {
          column: new ColumnBranch(order.column).normalize()
        })
    );

    this.customColumns = this.customColumns.map(
      customColumn =>
        new CustomColumn(customColumn, {
          column: new ColumnBranch(customColumn.column).normalize()
        })
    );
  }
}
