import { DataSourceConstructorState } from 'src/components/query-builder/App/DataSourceConstructor/redux/state';
import { GlobalErrorState } from '../global-error/state';
import { VariablesState } from '../variables/state';

export type State = DataSourceConstructorState &
  GlobalErrorState &
  VariablesState;

export type PickStates<T extends keyof State> = {
  [K in Extract<T, keyof State>]: State[K]
};
