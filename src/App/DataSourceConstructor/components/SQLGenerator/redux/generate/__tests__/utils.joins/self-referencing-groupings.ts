import { ColumnBranch } from '../../../../../SQLBuilder/components/common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { Grouping } from '../../../../../SQLBuilder/components/GroupingsBuilder/components/GroupingItem/model';

export const selfRef1LvlGroupings = [
  new Grouping({
    column: new ColumnBranch({
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
    id: '064cb667-d3c3-4d4f-96ac-c87b48036f87'
  }),
  new Grouping({
    column: new ColumnBranch({
      columnName: 'AdminID',
      tableName: 'users',
      type: 'number',
      foreignColumn: new ColumnBranch({
        columnName: 'ID',
        tableName: 'users',
        type: 'number'
      }).normalize(),
      foreignTableName: 'Users'
    }).normalize(),
    id: 'b9f3885f-98ea-4084-a400-130aa03f3295'
  }),
  new Grouping({
    column: new ColumnBranch({
      columnName: 'AdminID',
      tableName: 'users',
      type: 'number',
      foreignColumn: new ColumnBranch({
        columnName: 'AddressID',
        tableName: 'users',
        type: 'number',
        foreignTableName: 'Addresses'
      }).normalize(),
      foreignTableName: 'Users'
    }).normalize(),
    id: 'a7619863-2e78-4ede-8ac9-358ce9a629d8'
  })
];
export const selfRef2LvlGroupings = [
  new Grouping({
    column: new ColumnBranch({
      columnName: 'AdminID',
      tableName: 'users',
      type: 'number',
      foreignColumn: new ColumnBranch({
        columnName: 'AdminID',
        tableName: 'users',
        type: 'number',
        foreignColumn: new ColumnBranch({
          columnName: 'ID',
          tableName: 'users',
          type: 'number'
        }).normalize(),
        foreignTableName: 'Users'
      }).normalize(),
      foreignTableName: 'Users'
    }).normalize(),
    id: '6a438463-ecf7-4906-af84-09945db87967'
  }),
  new Grouping({
    column: new ColumnBranch({
      columnName: 'AdminID',
      tableName: 'users',
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
    id: 'c2470bc6-254c-48d8-82e5-6fe0defb33f5'
  }),
  new Grouping({
    column: new ColumnBranch({
      columnName: 'AdminID',
      tableName: 'users',
      type: 'number',
      foreignColumn: new ColumnBranch({
        columnName: 'AdminID',
        tableName: 'users',
        type: 'number',
        foreignColumn: new ColumnBranch({
          columnName: 'AddressID',
          tableName: 'users',
          type: 'number',
          foreignTableName: 'Addresses'
        }).normalize(),
        foreignTableName: 'Users'
      }).normalize(),
      foreignTableName: 'Users'
    }).normalize(),
    id: 'c73f5c6a-d3eb-4e90-8982-5d07f5368c33'
  })
];
export const selfRef3LvlGroupings = [
  new Grouping({
    column: new ColumnBranch({
      columnName: 'AdminID',
      tableName: 'users',
      type: 'number',
      foreignColumn: new ColumnBranch({
        columnName: 'AdminID',
        tableName: 'users',
        type: 'number',
        foreignColumn: new ColumnBranch({
          columnName: 'AdminID',
          tableName: 'users',
          type: 'number',
          foreignColumn: new ColumnBranch({
            columnName: 'ID',
            tableName: 'users',
            type: 'number'
          }).normalize(),
          foreignTableName: 'Users'
        }).normalize(),
        foreignTableName: 'Users'
      }).normalize(),
      foreignTableName: 'Users'
    }).normalize(),
    id: '33270e33-3028-4408-907b-b0f307478073'
  }),
  new Grouping({
    column: new ColumnBranch({
      columnName: 'AdminID',
      tableName: 'users',
      type: 'number',
      foreignColumn: new ColumnBranch({
        columnName: 'AdminID',
        tableName: 'users',
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
      foreignTableName: 'Users'
    }).normalize(),
    id: 'bb7660ee-afe9-4088-9053-28427e6f62ed'
  }),
  new Grouping({
    column: new ColumnBranch({
      columnName: 'AdminID',
      tableName: 'users',
      type: 'number',
      foreignColumn: new ColumnBranch({
        columnName: 'AdminID',
        tableName: 'users',
        type: 'number',
        foreignColumn: new ColumnBranch({
          columnName: 'AdminID',
          tableName: 'users',
          type: 'number',
          foreignColumn: new ColumnBranch({
            columnName: 'AddressID',
            tableName: 'users',
            type: 'number',
            foreignTableName: 'Addresses'
          }).normalize(),
          foreignTableName: 'Users'
        }).normalize(),
        foreignTableName: 'Users'
      }).normalize(),
      foreignTableName: 'Users'
    }).normalize(),
    id: 'ce4fbeac-9c7d-4e6f-9db2-9ed7410de72f'
  })
];
