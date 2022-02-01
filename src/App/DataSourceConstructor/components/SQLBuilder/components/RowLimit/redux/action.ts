import { Action } from 'src/components/query-builder/store/models/action-types';
import { RowLimitBuilderState } from './state';

export type SetRowLimitAction = Action<
  'SET_ROW_LIMIT',
  { rowLimit: RowLimitBuilderState['rowLimit'] }
>;

export type ResetRowLimitAction = Action<'RESET_ROW_LIMIT'>;

export type RowLimitActions = SetRowLimitAction | ResetRowLimitAction;

export const setRowLimit = (
  rowLimit: RowLimitBuilderState['rowLimit']
): SetRowLimitAction => ({
  type: 'SET_ROW_LIMIT',
  rowLimit
});

export const resetRowLimit = (): ResetRowLimitAction => ({
  type: 'RESET_ROW_LIMIT'
});

export const RowLimitBuilderActionCreators = {
  setRowLimit,
  resetRowLimit
};
