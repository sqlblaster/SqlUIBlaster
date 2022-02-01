import { changeCanSaveFilterState } from './can-save-filter/action';
import { setOperation } from './operation/action';
import { setPickedVariables } from './variable/action';

export const MutateFilterPopoverActionCreators = {
  setOperation,
  setPickedVariables,
  changeCanSaveFilterState
};
