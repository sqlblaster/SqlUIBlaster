import { NumberOperation } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/NumberMutator/NumberOperation';
import {
  ColumnBranchAliased,
  FilterAliased
} from '../../../JOIN/models/ColumnAliased';

export const complexBracketsFilters = [
  new FilterAliased({
    logicOperator: 'and',
    openingBracketsCount: 2,
    closingBracketsCount: 0,
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
  }),
  new FilterAliased({
    logicOperator: 'or',
    openingBracketsCount: 0,
    closingBracketsCount: 1,
    column: new ColumnBranchAliased({
      tableAlias: 'orders1',
      columnName: 'Details',
      tableName: 'orders',
      type: 'string'
    }),
    operation: {
      operator: 'Is',
      operands: 'Detail2',
      caseSensitive: false,
      type: 'String'
    },
    variables: null,
    id: '047eadc2-b468-45b7-a4fa-743ae73e2bce'
  }),
  new FilterAliased({
    logicOperator: 'and',
    openingBracketsCount: 0,
    closingBracketsCount: 1,
    column: new ColumnBranchAliased({
      tableAlias: 'orders1',
      columnName: 'Quantity',
      tableName: 'orders',
      type: 'number'
    }),
    operation: { operator: 'Greater than', operands: 10, type: 'Number' },
    variables: null,
    id: 'f0bee121-884a-44b9-9516-c42aae75cbc4'
  }),
  new FilterAliased({
    logicOperator: 'and',
    openingBracketsCount: 1,
    closingBracketsCount: 0,
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
    id: '89af0cb8-426a-42f8-8710-3e35919e4a5a'
  }),
  new FilterAliased({
    logicOperator: 'and',
    openingBracketsCount: 1,
    closingBracketsCount: 0,
    column: new ColumnBranchAliased({
      tableAlias: 'orders1',
      columnName: 'Quantity',
      tableName: 'orders',
      type: 'number'
    }),
    operation: { operator: 'Less than', operands: 5, type: 'Number' },
    variables: null,
    id: '9854c86e-bd52-47e8-8ad7-45e99390266f'
  }),
  new FilterAliased({
    logicOperator: 'or',
    openingBracketsCount: 0,
    closingBracketsCount: 2,
    column: new ColumnBranchAliased({
      tableAlias: 'orders1',
      columnName: 'Quantity',
      tableName: 'orders',
      type: 'number'
    }),
    operation: new NumberOperation({ operator: 'Is empty', type: 'Number' }),
    variables: null,
    id: 'e92eabb0-03b0-4d3b-b19f-00961cbe86cf'
  })
];
