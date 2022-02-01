import { formatColumn } from '../common-formatters';
import { OrderAliased } from '../JOIN/models/ColumnAliased';

export const generateOrderBy = (
  orders: OrderAliased[] = [],
  groupingsOrderBy: string
): string => {
  if (groupingsOrderBy) {
    return groupingsOrderBy;
  }

  let orderBy = orders.length
    ? `
    ORDER BY `
    : '';

  orders.forEach(
    (
      {
        column: {
          lastColumn: { columnName, tableAlias }
        },
        sortOrderCode
      },
      index
    ) => {
      const column = formatColumn(columnName, tableAlias);
      const comma = orders.length - 1 === index ? '' : ',';

      orderBy += `${column} ${sortOrderCode}${comma}`;
    }
  );

  return orderBy;
};
