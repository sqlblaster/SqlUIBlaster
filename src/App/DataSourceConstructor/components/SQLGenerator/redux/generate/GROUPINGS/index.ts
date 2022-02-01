import { formatColumn } from '../common-formatters';
import { GroupingAliased, OrderAliased } from '../JOIN/models/ColumnAliased';
import { getColumnAlias } from '../SELECT/utils';

export const generateGroupings = (
  groupings: GroupingAliased[] = [],
  orders: OrderAliased[] = []
) => {
  let groupBySelections = '';
  let groupBy = groupings.length
    ? `
    GROUP BY `
    : '';
  let orderBy = groupings.length
    ? `
    ORDER BY `
    : '';

  groupings.forEach(({ column }, index) => {
    const {
      lastColumn: { columnName, tableAlias }
    } = column;
    const comma = groupings.length - 1 === index ? '' : ',';
    const columnExpression = `${formatColumn(columnName, tableAlias)}`;
    const order = orders.find(
      o =>
        formatColumn(
          o.column.lastColumn.columnName,
          o.column.lastColumn.tableAlias
        ) === columnExpression
    );
    const sortOrder = order ? order.sortOrderCode : 'ASC';

    groupBySelections += `${columnExpression} ${getColumnAlias(
      column
    )}${comma}`;
    groupBy += `${columnExpression}${comma}`;
    orderBy += `${columnExpression} ${sortOrder}${comma}`;
  });

  return {
    groupBySelections,
    groupBy,
    groupingsOrderBy: orderBy
  };
};
