import { createStore, Store } from 'redux';
import { Action } from 'src/store/models/action-types';
import { State } from 'src/store/models/State';
import { rootReducer } from 'src/store/reducer';

export const getStore = (
  initialState: Partial<State> = {}
): Store<State, Action> =>
  createStore<State, Action, {}, {}>(
    rootReducer, 
    // @ts-ignore
    initialState
  );
