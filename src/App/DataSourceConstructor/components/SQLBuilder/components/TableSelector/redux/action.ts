import { Table } from 'src/components/query-builder/App/DataSourceConstructor/schemas';
import { Action } from 'src/components/query-builder/store/models/action-types';

export type SelectTableAction = Action<
  'SELECT_TABLE',
  { table: Table }
>;

export const selectTable = (
  table: Table
): SelectTableAction => ({
  type: 'SELECT_TABLE',
  table
});
