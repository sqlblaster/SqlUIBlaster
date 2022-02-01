import { ColumnBranchAliased, FilterAliased } from '../../../JOIN/models/ColumnAliased';

export const doubleBracketsFilter = [
  new FilterAliased({
    logicOperator: 'and',
    openingBracketsCount: 2,
    closingBracketsCount: 2,
    column: new ColumnBranchAliased({
      tableAlias: 'orders1',
      columnName: 'Details',
      tableName: 'orders',
      type: 'string'
    }),
    operation: {
      operator: 'Is',
      operands: 'Detail1',
      caseSensitive: false,
      type: 'String'
    },
    variables: null,
    id: '4db81547-a987-4e61-a90e-8f4a7d748962'
  })
];
