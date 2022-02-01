import { Table } from 'src/App/DataSourceConstructor/schemas';
import { Action } from 'src/store/models/action-types';

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
