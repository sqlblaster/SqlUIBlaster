import { Action } from 'src/components/query-builder/store/models/action-types';
import { Table } from '../../schemas';

export type TablesAction = Action<'SET_TABLES', { tables: Table[] }>;

export const setTables = (tables: Table[]): TablesAction => ({
  type: 'SET_TABLES',
  tables
});
