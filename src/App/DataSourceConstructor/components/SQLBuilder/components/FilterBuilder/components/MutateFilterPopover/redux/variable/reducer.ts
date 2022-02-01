import { Reducer } from 'redux';
import { SetPickedVariablesAction } from './action';
import { PickedVariablesState } from './state';

export const pickedVariables: Reducer<
  PickedVariablesState['pickedVariables'],
  SetPickedVariablesAction
> = (state = null, action) =>
  action.type === 'SET_PICKED_VARIABLES' ? action.pickedVariables : state;
