import { DSCActionCreators } from 'src/App/DataSourceConstructor/redux/action-creators';
import { raiseGlobalError } from './global-error/action';
import { updateRootState } from './reducer';

export const actionCreators = {
  ...DSCActionCreators,
  raiseGlobalError,
  updateRootState
};

export type AllActionCreators = typeof actionCreators;

export type PickActionCreators<AC extends keyof AllActionCreators> = {
  [K in Extract<AC, keyof AllActionCreators>]: AllActionCreators[K]
};
