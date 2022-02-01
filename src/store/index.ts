import {
  applyMiddleware,
  compose,
  createStore,
  Store
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { epic } from './epic';
import { Action } from './models/action-types';
import { dependencies } from './models/Dependencies';
import { State } from './models/State';
import { rootReducer } from './reducer';

export const getConfiguredStore = (
  initialState?: Partial<State>
): Store<State, Action> => {
  const composeEnhancers: typeof compose =
    typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const epicMiddleware = createEpicMiddleware({
    dependencies
  });

  const enhancer = composeEnhancers(
    applyMiddleware(epicMiddleware)
  );

  const store = createStore<State, Action, {}, {}>(
    rootReducer,
    initialState,
    enhancer
  );

  // store.subscribe(() => {
  //   console.log('store state:', store.getState());
  // });

  epicMiddleware.run(epic);

  return store;
};
