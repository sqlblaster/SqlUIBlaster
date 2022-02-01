import { ColumnBranch } from '../../../../../SQLBuilder/components/common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { Grouping } from '../../../../../SQLBuilder/components/GroupingsBuilder/components/GroupingItem/model';

export const twoLvlGroupings = [
  new Grouping({
    column: new ColumnBranch({
      columnName: 'ProductID',
      tableName: 'orders',
      type: 'number',
      foreignColumn: new ColumnBranch({
        columnName: 'AddedBy',
        tableName: 'products',
        type: 'number',
        foreignColumn: new ColumnBranch({
          columnName: 'ID',
          tableName: 'users',
          type: 'number'
        }).normalize(),
        foreignTableName: 'Users'
      }).normalize(),
      foreignTableName: 'Products'
    }).normalize(),
    id: '07ff38fd-3035-46cd-b9fe-94dc2763b440'
  }),
  new Grouping({
    column: new ColumnBranch({
      columnName: 'ProductID',
      tableName: 'orders',
      type: 'number',
      foreignColumn: new ColumnBranch({
        columnName: 'AddedBy',
        tableName: 'products',
        type: 'number',
        foreignColumn: new ColumnBranch({
          columnName: 'Username',
          tableName: 'users',
          type: 'string'
        }).normalize(),
        foreignTableName: 'Users'
      }).normalize(),
      foreignTableName: 'Products'
    }).normalize(),
    id: '59d6640d-714d-4cdf-aa3a-7e4e91b4de92'
  }),
  new Grouping({
    column: new ColumnBranch({
      columnName: 'UserID',
      tableName: 'orders',
      type: 'number',
      foreignColumn: new ColumnBranch({
        columnName: 'AddressID',
        tableName: 'users',
        type: 'number',
        foreignColumn: new ColumnBranch({
          columnName: 'ID',
          tableName: 'addresses',
          type: 'number'
        }).normalize(),
        foreignTableName: 'Addresses'
      }).normalize(),
      foreignTableName: 'Users'
    }).normalize(),
    id: 'b169bdc0-2faf-4b29-83b5-9867413781f2'
  })
];
