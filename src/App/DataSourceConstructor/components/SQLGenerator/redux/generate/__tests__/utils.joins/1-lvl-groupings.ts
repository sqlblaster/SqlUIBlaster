import { ColumnBranch } from '../../../../../SQLBuilder/components/common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { Grouping } from '../../../../../SQLBuilder/components/GroupingsBuilder/components/GroupingItem/model';

export const oneLvlGroupings = [
  new Grouping({
    column: new ColumnBranch({
      columnName: 'ProductID',
      tableName: 'orders',
      type: 'number',
      foreignColumn: new ColumnBranch({
        columnName: 'ID',
        tableName: 'products',
        type: 'number'
      }).normalize(),
      foreignTableName: 'Products'
    }).normalize(),
    id: 'df28eeeb-85e5-4148-8013-920f89a2b237'
  }),
  new Grouping({
    column: new ColumnBranch({
      columnName: 'UserID',
      tableName: 'orders',
      type: 'number',
      foreignColumn: new ColumnBranch({
        columnName: 'Username',
        tableName: 'users',
        type: 'string'
      }).normalize(),
      foreignTableName: 'Users'
    }).normalize(),
    id: 'de4a6120-a5ee-4f35-b6d9-8385737934be'
  }),
  new Grouping({
    column: new ColumnBranch({
      columnName: 'ProductID',
      tableName: 'orders',
      type: 'number',
      foreignColumn: new ColumnBranch({
        columnName: 'Product name',
        tableName: 'products',
        type: 'string'
      }).normalize(),
      foreignTableName: 'Products'
    }).normalize(),
    id: 'c0357427-f6de-419f-b03d-637bc20bc09b'
  })
];
