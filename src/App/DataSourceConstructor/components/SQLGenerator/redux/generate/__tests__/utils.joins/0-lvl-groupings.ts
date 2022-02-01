import { ColumnBranch } from '../../../../../SQLBuilder/components/common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { Grouping } from '../../../../../SQLBuilder/components/GroupingsBuilder/components/GroupingItem/model';

export const zeroLvlGroupings = [
  new Grouping({
    column: new ColumnBranch({
      columnName: 'ID',
      tableName: 'orders',
      type: 'number'
    }).normalize(),
    id: 'ab66b387-40a0-4383-8f40-72bd9ccfaa0c'
  }),
  new Grouping({
    column: new ColumnBranch({
      columnName: 'Created At',
      tableName: 'orders',
      type: 'Date'
    }).normalize(),
    id: '1bb93872-1d5e-4ec4-b9ec-445c5d08eb90'
  }),
  new Grouping({
    column: new ColumnBranch({
      columnName: 'Details',
      tableName: 'orders',
      type: 'string'
    }).normalize(),
    id: 'e8aaa461-7501-4c14-b17d-6be80024c1a8'
  }),
  new Grouping({
    column: new ColumnBranch({
      columnName: 'Quantity',
      tableName: 'orders',
      type: 'number'
    }).normalize(),
    id: '47154cc8-6634-4689-a9d7-921451df2baf'
  })
];
