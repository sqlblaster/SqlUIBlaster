import { equals } from 'ramda';
import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/components/query-builder/store/models/State';
import { getNewState } from '../DataSourceConstructor/utils';
import {
  DrillDownQueryBuilderDispatchProps,
  DrillDownQueryBuilderOwnProps,
  DrillDownQueryBuilderProps,
  DrillDownQueryBuilderStateProps,
  DSCMapDispatchToProps
} from './props';
import { DrillDownQueryBuilder as View } from './view';

export const DrillDownQueryBuilder = connect<
  DrillDownQueryBuilderStateProps,
  DrillDownQueryBuilderDispatchProps,
  DrillDownQueryBuilderOwnProps,
  State
>(state => {
  const { sqlQuery, queryJson, selectedTable } = state;

  return {
    sqlQuery,
    queryJson,
    rootState: state,
    selectedTable
  };
}, DSCMapDispatchToProps)(
  class extends React.Component<DrillDownQueryBuilderProps> {
    constructor(props: DrillDownQueryBuilderProps) {
      super(props);

      const {
        databaseSchema,
        initialQuery,
        rootState,
        setDatabaseSchema,
        updateRootState
      } = props;

      setDatabaseSchema(databaseSchema);

      initialQuery &&
        updateRootState(
          getNewState(initialQuery, {
            ...rootState,
            tables: databaseSchema.tables
          })
        );
    }

    public componentWillReceiveProps({
      databaseSchema: nextDatabaseSchema,
      sqlQuery: nextSqlQuery,
      queryJson: nextQueryJson,
      initialQuery: nextInitialQuery
    }: DrillDownQueryBuilderProps) {
      const {
        databaseSchema,
        sqlQuery,
        initialQuery,
        rootState,
        onQueryChange,
        setDatabaseSchema,
        updateRootState
      } = this.props;

      if (!equals(databaseSchema, nextDatabaseSchema)) {
        setDatabaseSchema(nextDatabaseSchema);
      }

      if (!equals(nextInitialQuery, initialQuery)) {
        updateRootState(
          getNewState(nextInitialQuery, {
            ...rootState
          })
        );
      }

      if (sqlQuery !== '' && nextSqlQuery !== sqlQuery && onQueryChange) {
        onQueryChange(nextSqlQuery, nextQueryJson);
      }
    }

    public render() {
      const { selectedTable, enabled } = this.props;

      return <View selectedTable={selectedTable} enabled={enabled} />;
    }
  }
);
