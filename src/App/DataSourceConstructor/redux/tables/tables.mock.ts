import { Column, Table } from '../../schemas';

export const tablesMock = [
  new Table({
    name: 'Orders',
    columns: [
      new Column({
        name: 'ID',
        type: 'primary'
      }),
      new Column({
        name: 'Details',
        type: 'string',
        enums: ['Detail1', 'Detail2']
      }),
      new Column({
        name: 'Created At',
        type: 'Date'
      }),
      new Column({
        name: 'Quantity',
        type: 'number'
      }),
      new Column({
        name: 'Paid',
        type: 'boolean'
      }),
      new Column({
        name: 'ProductID',
        type: 'string',
        foreignTableName: 'Products'
      }),
      new Column({
        name: 'UserID',
        type: 'string',
        foreignTableName: 'Users'
      })
    ]
  }),
  new Table({
    name: 'Users',
    columns: [
      new Column({
        name: 'ID',
        type: 'primary'
      }),
      new Column({
        name: 'AddressID',
        type: 'number',
        foreignTableName: 'Addresses'
      }),
      new Column({
        name: 'Username',
        type: 'string'
      }),
      new Column({
        name: 'AdminID',
        type: 'string',
        foreignTableName: 'Users'
      })
    ]
  }),
  new Table({
    name: 'Products',
    columns: [
      new Column({
        name: 'ID',
        type: 'primary'
      }),
      new Column({
        name: 'Product name',
        type: 'string'
      }),
      new Column({
        name: 'Available amount',
        type: 'number'
      }),
      new Column({
        name: 'AddedBy',
        type: 'string',
        foreignTableName: 'Users'
      }),
      new Column({
        name: 'CurrencyID',
        type: 'string',
        foreignTableName: 'Currency'
      }),
      new Column({
        name: 'LocalCurrencyID',
        type: 'string',
        foreignTableName: 'Currency'
      })
    ]
  }),
  new Table({
    name: 'Addresses',
    columns: [
      new Column({
        name: 'ID',
        type: 'primary'
      }),
      new Column({
        name: 'StreetID',
        type: 'string',
        foreignTableName: 'Streets'
      })
    ]
  }),
  new Table({
    name: 'Streets',
    columns: [
      new Column({
        name: 'ID',
        type: 'primary'
      }),
      new Column({
        name: 'Street name',
        type: 'string'
      })
    ]
  }),
  new Table({
    name: 'Currency',
    primaryKeyColumn: 'ID',
    columns: [
      new Column({
        name: 'ID',
        type: 'primary'
      }),
      new Column({
        name: 'name',
        type: 'string'
      })
    ]
  })
];
