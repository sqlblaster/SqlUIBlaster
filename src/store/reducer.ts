import { combineReducers, Reducer } from 'redux';
import { DataSourceConstructorReducers } from 'src/components/query-builder/App/DataSourceConstructor/redux/reducers';
import { globalError } from './global-error/reducer';
import { Action } from './models/action-types';
import { State } from './models/State';

export const mainReducer = combineReducers<State>({
  ...DataSourceConstructorReducers,
  globalError,
  variables: (state = []) => state
});

export type UpdateRootStateAction = Action<'UPDATE_ROOT_STATE', { state: State }>;

export const updateRootState = (state: State): UpdateRootStateAction => ({
  type: 'UPDATE_ROOT_STATE',
  state
});

export const updateRootStateReducer: Reducer<State, UpdateRootStateAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'UPDATE_ROOT_STATE':
      return action.state;
    default:
      return mainReducer(state, action);
  }
};

export const rootReducer = updateRootStateReducer as typeof mainReducer;
