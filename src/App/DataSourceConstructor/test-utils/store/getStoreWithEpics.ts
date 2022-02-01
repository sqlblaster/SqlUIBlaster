import { applyMiddleware, compose, createStore, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { epic } from 'src/store/epic';
import { Action } from 'src/store/models/action-types';
import { dependencies } from 'src/store/models/Dependencies';
import { State } from 'src/store/models/State';
import { rootReducer } from 'src/store/reducer';

export const getStoreWithEpics = (
  initialState: Partial<State> = {}
): Store<State, Action> => {

  const epicMiddleware = createEpicMiddleware({
    dependencies
  });

  const enhancer = compose(applyMiddleware(epicMiddleware));

  const store = createStore<State, Action, any, any>(
    rootReducer,
    initialState,
    enhancer
  );

  epicMiddleware.run(epic);

  return store;
};
