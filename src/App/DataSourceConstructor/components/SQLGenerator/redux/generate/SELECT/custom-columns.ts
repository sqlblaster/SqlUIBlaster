import { CustomColumnAliased } from '../JOIN/models/ColumnAliased';
import { getColumnAlias } from './utils';

export const generateCustomColumnsSelection = (
  customColumns: CustomColumnAliased[]
): string => {
  let selection = '';

  customColumns
    .filter(({ column }) => column !== column.lastColumn)
    .forEach(({ column }, index, filteredCustomColumns) => {
      const {
        lastColumn: { tableAlias, columnName }
      } = column;

      const columnAlias = getColumnAlias(column);

      selection += `
      "${tableAlias}"."${columnName}" ${columnAlias}${
        index !== filteredCustomColumns.length - 1 ? ',' : ''
      }`;
    });

  return selection;
};
