import { ColumnBranch } from '../../../../../SQLBuilder/components/common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { Grouping } from '../../../../../SQLBuilder/components/GroupingsBuilder/components/GroupingItem/model';

export const threeLvlGroupings = [
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
      foreignTableName: 'Products'
    }).normalize(),
    id: 'bca5a20c-2e03-455d-bd4c-c4308cac4da9'
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
          columnName: 'AdminID',
          tableName: 'users',
          type: 'number',
          foreignColumn: new ColumnBranch({
            columnName: 'Username',
            tableName: 'users',
            type: 'string'
          }).normalize(),
          foreignTableName: 'Users'
        }).normalize(),
        foreignTableName: 'Users'
      }).normalize(),
      foreignTableName: 'Products'
    }).normalize(),
    id: '23407ed9-b5ed-4dc7-906d-8ebc1791b4dc'
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
          columnName: 'StreetID',
          tableName: 'addresses',
          type: 'number',
          foreignColumn: new ColumnBranch({
            columnName: 'Street name',
            tableName: 'streets',
            type: 'string'
          }).normalize(),
          foreignTableName: 'Streets'
        }).normalize(),
        foreignTableName: 'Addresses'
      }).normalize(),
      foreignTableName: 'Users'
    }).normalize(),
    id: 'd12623e5-3e89-46f2-b0e0-710a38a22686'
  })
];
