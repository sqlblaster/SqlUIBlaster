import { Reducer } from 'redux';
import { ChangeCanSaveFilterStateAction } from './action';
import { CanSaveFilterState } from './state';

export const canSaveFilter: Reducer<CanSaveFilterState['canSaveFilter'], ChangeCanSaveFilterStateAction> = (
  state = true,
  action
) => (action.type === 'CHANGE_CAN_SAVE_FILTER_STATE' ? action.canSaveFilter : state);
