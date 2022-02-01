import { CanSaveFilterState } from './can-save-filter/state';
import { OperationState } from './operation/state';
import { PickedVariablesState } from './variable/state';

export type MutateFilterPopoverState = OperationState &
  CanSaveFilterState &
  PickedVariablesState;
