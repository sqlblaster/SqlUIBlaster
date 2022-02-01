import { clone } from 'ramda';
import { Aggregation } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/AggregationsBuilder/components/AggregationItem/model';
import { Filter } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/FilterItem/model';
import { Grouping } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/GroupingsBuilder/components/GroupingItem/model';
import { Order } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/OrdersBuilder/components/OrderItem/model';
import { CustomColumn } from '../../../../SQLBuilder/components/CustomColumnsBuilder/components/CustomColumnItem/model';
import {
  AggregationAliased,
  ColumnBranchAliased,
  CustomColumnAliased,
  FilterAliased,
  GroupingAliased,
  IAliased,
  IHasColumn,
  OrderAliased
} from './models/ColumnAliased';

export const getAliasedEntities = <
  TEntity extends IHasColumn,
  TEntityAliased extends IAliased
>(
  entities: TEntity[],
  reducer: (column: ColumnBranchAliased, entity: TEntity) => TEntityAliased,
  hasNoColumnAction?: (entity: TEntity) => TEntityAliased
): TEntityAliased[] => {
  return clone(entities).map(entity => {
    if (hasNoColumnAction) {
      return hasNoColumnAction(entity);
    }
    const column = new ColumnBranchAliased(entity.column ? entity.column : {});
    column.normalizeLastColumn();

    return reducer(column, entity);
  });
};

export const getAllColumnBranches = (
  filters: Filter[],
  aggregations: Aggregation[],
  groupings: Grouping[],
  orders: Order[],
  customColumns: CustomColumn[]
) => {
  const customColumnsAliased = getAliasedEntities(
    customColumns,
    (column, customColumn) => new CustomColumnAliased(customColumn, { column })
  );

  const filtersAliased = getAliasedEntities(
    filters,
    (column, filter) =>
      new FilterAliased(filter, {
        column
      })
  );

  const aggregationsAliased = getAliasedEntities(
    aggregations,
    (column, aggregation) =>
      new AggregationAliased(aggregation, {
        column
      }),
    aggregation => new AggregationAliased(aggregation)
  );

  const groupingsAliased = getAliasedEntities(
    groupings,
    (column, grouping) =>
      new GroupingAliased(grouping, {
        column
      })
  );

  const ordersAliased = getAliasedEntities(
    orders,
    (column, order) =>
      new OrderAliased(order, {
        column
      })
  );

  const groupingAliasedColumns = groupingsAliased.map(
    grouping => grouping.column
  );

  let ordersAliasedColumns = ordersAliased.map(order => order.column);
  ordersAliasedColumns = getOnlyGroupedOrdersColumns(
    ordersAliasedColumns,
    groupingAliasedColumns
  );

  const allColumnBranches: ColumnBranchAliased[] = [
    ...(aggregationsAliased.length || groupingAliasedColumns.length
      ? []
      : customColumnsAliased.map(customColumn => customColumn.column)),
    ...filtersAliased.map(filter => filter.column),
    ...aggregationsAliased
      .filter(aggregation => !!aggregation.column)
      .map<ColumnBranchAliased>(
        aggregation => aggregation.column as ColumnBranchAliased
      ),
    ...groupingAliasedColumns,
    ...ordersAliasedColumns
  ];

  return {
    allColumnBranches,
    customColumnsAliased,
    filtersAliased,
    aggregationsAliased,
    groupingsAliased,
    ordersAliased
  };
};

export const getOnlyGroupedOrdersColumns = (
  ordersColumns: ColumnBranchAliased[],
  groupingColumns: ColumnBranchAliased[]
): ColumnBranchAliased[] => {
  let columns: ColumnBranchAliased[] = ordersColumns;

  if (groupingColumns.length) {
    columns = columns.filter(orderColumn =>
      groupingColumns.find(groupingColumn => groupingColumn.equals(orderColumn))
    );
  }

  return columns;
};
