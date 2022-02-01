import { ColumnBranch } from '../../../../../SQLBuilder/components/common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { Grouping } from '../../../../../SQLBuilder/components/GroupingsBuilder/components/GroupingItem/model';

export const similarForeignGroupings = [
  new Grouping({
    column: new ColumnBranch({
      columnName: 'CurrencyID',
      tableName: 'products',
      type: 'number',
      foreignColumn: new ColumnBranch({
        columnName: 'name',
        tableName: 'currency',
        type: 'string'
      }).normalize(),
      foreignTableName: 'currency',
    }).normalize(),
    id: 'a69c1573-8e32-466c-952f-c2987aa5952d'
  }),
  new Grouping({
    column: new ColumnBranch({
      columnName: 'LocalCurrencyID',
      tableName: 'products',
      type: 'number',
      foreignColumn: new ColumnBranch({
        columnName: 'ID',
        tableName: 'currency',
        type: 'number'
      }).normalize(),
      foreignTableName: 'currency',
    }).normalize(),
    id: '6cdd04cf-af5d-478f-a56d-d2ea7e3721b7'
  })
];
