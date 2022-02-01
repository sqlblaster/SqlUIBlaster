import { createStore, Store } from 'redux';
import { Action } from 'src/components/query-builder/store/models/action-types';
import { State } from 'src/components/query-builder/store/models/State';
import { rootReducer } from 'src/components/query-builder/store/reducer';

export const getStore = (
  initialState: Partial<State> = {}
): Store<State, Action> =>
  createStore<State, Action, {}, {}>(rootReducer, initialState);
