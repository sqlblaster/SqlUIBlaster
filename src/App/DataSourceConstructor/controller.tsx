import { equals } from 'ramda';
import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import {
  DataSourceConstructorDispatchProps,
  DataSourceConstructorOwnProps,
  DataSourceConstructorProps,
  DataSourceConstructorStateProps,
  DSCMapDispatchToProps
} from './props';
import { getNewState, preprocessVariables } from './utils';
import { DataSourceConstructor as View } from './view';

export const DataSourceConstructor = connect<
  DataSourceConstructorStateProps,
  DataSourceConstructorDispatchProps,
  DataSourceConstructorOwnProps,
  State
>(state => {
  const { sqlQuery, queryJson, drillDownSqlQuery, drillDownQueryJson } = state;

  return {
    sqlQuery,
    queryJson,
    drillDownSqlQuery,
    drillDownQueryJson,
    rootState: state
  };
}, DSCMapDispatchToProps)(
  class extends React.Component<DataSourceConstructorProps> {
    constructor(props: DataSourceConstructorProps) {
      super(props);

      const {
        databaseSchema,
        initialQuery,
        initialDrillDownQueryJson,
        rootState,
        variables,
        setDatabaseSchema,
        updateRootState
      } = props;

      setDatabaseSchema(databaseSchema);

      initialQuery &&
        updateRootState(
          getNewState(initialQuery, {
            ...rootState,
            ...(initialDrillDownQueryJson
              ? { drillDownQueryJson: initialDrillDownQueryJson }
              : {}),
            tables: databaseSchema.tables,
            variables: preprocessVariables(variables)
          })
        );
    }

    public componentWillReceiveProps({
      databaseSchema: nextDatabaseSchema,
      sqlQuery: nextSqlQuery,
      queryJson: nextQueryJson,
      drillDownSqlQuery: nextDrillDownSqlQuery,
      drillDownQueryJson: nextDrillDownQueryJson,
      initialQuery: nextInitialQuery,
      initialDrillDownQueryJson: nextInitialDrillDownQueryJson,
      variables: nextVariables
    }: DataSourceConstructorProps) {
      const {
        databaseSchema,
        sqlQuery,
        initialQuery,
        drillDownSqlQuery,
        initialDrillDownQueryJson,
        variables,
        rootState,
        onQueryChange,
        setDatabaseSchema,
        updateRootState
      } = this.props;

      if (!equals(databaseSchema, nextDatabaseSchema)) {
        setDatabaseSchema(nextDatabaseSchema);
      }

      if (
        !equals(nextInitialQuery, initialQuery) ||
        !equals(nextVariables, variables) ||
        !equals(nextInitialDrillDownQueryJson, initialDrillDownQueryJson)
      ) {
        updateRootState(
          getNewState(nextInitialQuery, {
            ...rootState,
            variables: preprocessVariables(nextVariables)
          })
        );
      }

      if (sqlQuery !== '' && nextSqlQuery !== sqlQuery && onQueryChange) {
        onQueryChange(
          nextSqlQuery,
          nextQueryJson,
          nextDrillDownSqlQuery,
          nextDrillDownQueryJson
        );
      } else if (drillDownSqlQuery !== nextDrillDownSqlQuery && onQueryChange) {
        onQueryChange(
          nextSqlQuery,
          nextQueryJson,
          nextDrillDownSqlQuery,
          nextDrillDownQueryJson
        );
      }
    }

    public render() {
      return <View showQuery={this.props.showQuery} />;
    }
  }
);
