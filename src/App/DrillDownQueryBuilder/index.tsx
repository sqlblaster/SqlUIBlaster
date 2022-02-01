import * as React from 'react';
import { Provider } from 'react-redux';
import { Action, Store } from 'redux';
import { getConfiguredStore } from 'src/store';
import { State } from 'src/store/models/State';

import { StandardQuery } from 'src/components';
import { buildDashboardSchema } from 'src/dashboard/editor/query';
import { GET_DASHBOARD_SCHEMA } from 'src/dashboard/queries';
import { GetDashboardSchemaQuery } from 'src/schema';
import { QueryJSON } from '../DataSourceConstructor/components/SQLGenerator/redux/query-json.model';
import { DrillDownQueryBuilder as Controller } from './controller';
import { DrillDownQueryBuilderOwnProps } from './props';

export class DrillDownQueryBuilder extends React.Component<
  Pick<
    DrillDownQueryBuilderOwnProps,
    'initialQuery' | 'onQueryChange' | 'enabled'
  >
> {
  public store: Store<State, Action> = getConfiguredStore();

  public render() {
    return (
      <Provider store={this.store}>
        <StandardQuery<GetDashboardSchemaQuery, {}>
          query={GET_DASHBOARD_SCHEMA}
        >
          {({ data }) => {
            const tables = data ? data.dashboard.schema : [];

            const databaseSchema = buildDashboardSchema(tables);

            return (
              <Controller
                {...this.props}
                databaseSchema={databaseSchema}
                initialQuery={new QueryJSON(this.props.initialQuery || {})}
              />
            );
          }}
        </StandardQuery>
      </Provider>
    );
  }
}
