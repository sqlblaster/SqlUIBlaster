import { ReducersMapObject } from 'redux';
import { canSaveFilter } from './can-save-filter/reducer';
import { operation } from './operation/reducer';
import { MutateFilterPopoverState } from './state';
import { pickedVariables } from './variable/reducer';

export const MutateFilterPopoverReducers: ReducersMapObject<
  MutateFilterPopoverState,
  any
> = {
  operation,
  canSaveFilter,
  pickedVariables
};
