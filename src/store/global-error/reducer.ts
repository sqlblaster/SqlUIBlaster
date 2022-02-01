import { Reducer } from 'redux';
import { GlobalErrorAction } from './action';

export const globalError: Reducer<string, GlobalErrorAction> = (
  state = '',
  action
) => {
  return action.type === 'GLOBAL_ERROR' ? action.message : state;
};
