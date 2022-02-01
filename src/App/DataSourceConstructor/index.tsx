import * as React from 'react';
import { Provider } from 'react-redux';
import { Action, Store } from 'redux';
import { getConfiguredStore } from 'src/store';
import { State } from 'src/store/models/State';

import { DataSourceConstructor as Controller } from './controller';
import { DataSourceConstructorOwnProps } from './props';

export class DataSourceConstructor extends React.Component<
  DataSourceConstructorOwnProps
> {
  public store: Store<State, Action> = getConfiguredStore();

  public render() {
    return (
      <Provider store={this.store}>
        <Controller {...this.props} />
      </Provider>
    );
  }
}
