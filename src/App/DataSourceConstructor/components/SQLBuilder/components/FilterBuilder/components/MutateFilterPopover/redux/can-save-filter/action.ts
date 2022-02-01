import { Action } from 'src/store/models/action-types';
import { CanSaveFilterState } from './state';

export type ChangeCanSaveFilterStateAction = Action<
  'CHANGE_CAN_SAVE_FILTER_STATE',
  CanSaveFilterState
>;

export const changeCanSaveFilterState = (
  canSaveFilter: CanSaveFilterState['canSaveFilter']
): ChangeCanSaveFilterStateAction => ({
  type: 'CHANGE_CAN_SAVE_FILTER_STATE',
  canSaveFilter
});

export const MutateFilterPopoverActionCreators = {
  changeCanSaveFilterState
};
