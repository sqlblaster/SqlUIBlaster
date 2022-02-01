import { Epic as ObsEpic } from 'redux-observable';
import { Action } from './action-types';
import { Dependencies } from './Dependencies';
import { State } from './State';

export type Epic<
  I extends Action = Action,
  O extends Action = Action
> = ObsEpic<
  I,
  /**
   * Output action type shouldn't be assignable to Input action type,
   * there is wrong decision to make like that for
   * redux-observable lib
   */
  any,
  State,
  Dependencies
>;
