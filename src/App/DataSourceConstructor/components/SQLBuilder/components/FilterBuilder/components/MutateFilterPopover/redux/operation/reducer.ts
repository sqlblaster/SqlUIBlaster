import { Reducer } from 'redux';
import { Operation } from '../../Operation';
import { StringOperation } from '../../SwitchMutator/mutators/StringMutator/StringOperation';
import { SetOperationAction } from './action';

export const operation: Reducer<Operation, SetOperationAction> = (
  state = new StringOperation(),
  action
) => (action.type === 'SET_OPERATION' ? action.operation : state);
