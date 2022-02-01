import { Reducer } from 'redux';
import { SelectTableAction } from './action';
import { TableSelectorState } from './state';

export const selectedTable: Reducer<
  TableSelectorState['selectedTable'],
  SelectTableAction
> = (state = null, { type, table }) => {
  switch (type) {
    case 'SELECT_TABLE':
      return table;
    default:
      return state;
  }
};
