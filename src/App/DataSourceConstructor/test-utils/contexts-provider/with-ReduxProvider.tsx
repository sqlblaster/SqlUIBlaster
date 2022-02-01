import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { State } from 'src/store/models/State';
import { ContextProviderApplicator } from '../configured-render';

export const WithReduxProvider: <TState = State>(
  store: Store<TState>
) => ContextProviderApplicator = (store) => (children) => (
  <Provider store={store}>{children}</Provider>
);
