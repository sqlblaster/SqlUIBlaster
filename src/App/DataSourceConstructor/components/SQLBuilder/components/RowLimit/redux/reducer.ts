import { Reducer, ReducersMapObject } from 'redux';
import { RowLimitActions } from './action';
import { RowLimitBuilderState } from './state';

export const defaultRowLimitValue = 2000;

export const rowLimit: Reducer<
  RowLimitBuilderState['rowLimit'],
  RowLimitActions
> = (state = defaultRowLimitValue, action) => {
  switch (action.type) {
    case 'SET_ROW_LIMIT':
      return action.rowLimit;
    case 'RESET_ROW_LIMIT':
      return defaultRowLimitValue;
    default:
      return state;
  }
};

export const RowLimitBuilderReducers: ReducersMapObject<
  RowLimitBuilderState
> = {
  rowLimit
};
