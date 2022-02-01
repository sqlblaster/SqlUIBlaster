import { Action } from 'src/components/query-builder/store/models/action-types';
import { PickedVariablesState } from './state';

type PickedVariables = PickedVariablesState['pickedVariables'];

export type SetPickedVariablesAction = Action<
  'SET_PICKED_VARIABLES',
  { pickedVariables: PickedVariables }
>;

export const setPickedVariables = (
  pickedVariables: PickedVariables
): SetPickedVariablesAction => ({
  type: 'SET_PICKED_VARIABLES',
  pickedVariables
});
