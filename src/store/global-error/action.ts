import { Action } from '../models/action-types';

export type GlobalErrorAction = Action<'GLOBAL_ERROR', { message: string }>;

export const raiseGlobalError = (message: string): GlobalErrorAction => ({
  type: 'GLOBAL_ERROR',
  message
});
