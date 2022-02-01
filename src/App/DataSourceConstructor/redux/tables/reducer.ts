import { Reducer } from 'redux';
import { Table } from '../../schemas';
import { TablesAction } from './action';

export const tables: Reducer<Table[], TablesAction> = (
  state = [],
  { type, tables: newTables }
) => {
  return type === 'SET_TABLES' ? newTables : state;
};
