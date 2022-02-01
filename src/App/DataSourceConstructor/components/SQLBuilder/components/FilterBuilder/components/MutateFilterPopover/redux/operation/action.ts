import { Action } from 'src/store/models/action-types';
import { Operation } from '../../Operation';

export type SetOperationAction = Action<
  'SET_OPERATION',
  { operation: Operation }
>;

export const setOperation = (operation: Operation): SetOperationAction => ({
  type: 'SET_OPERATION',
  operation
});
