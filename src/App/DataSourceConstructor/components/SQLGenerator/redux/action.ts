import { Action } from 'src/store/models/action-types';
import { QueryJSON } from './query-json.model';

export type SetSQLQueryAction = Action<'SET_SQL_QUERY', { query: string }>;

export const setSQLQuery = (query: string): SetSQLQueryAction => ({
  type: 'SET_SQL_QUERY',
  query
});

export type SetQueryJsonAction = Action<
  'SET_SQL_QUERY_JSON',
  { queryJson: QueryJSON }
>;

export const setQueryJson = (queryJson: QueryJSON): SetQueryJsonAction => ({
  type: 'SET_SQL_QUERY_JSON',
  queryJson
});

export type SetDrillDownSQLQueryAction = Action<
  'SET_DRILL_DOWN_SQL_QUERY',
  { query: string }
>;

export const setDrillDownSQLQuery = (
  query: string
): SetDrillDownSQLQueryAction => ({
  type: 'SET_DRILL_DOWN_SQL_QUERY',
  query
});

export type SetDrillDownQueryJsonAction = Action<
  'SET_DRILL_DOWN_QUERY_JSON',
  { queryJson: QueryJSON }
>;

export const setDrillDownQueryJson = (
  queryJson: QueryJSON
): SetDrillDownQueryJsonAction => ({
  type: 'SET_DRILL_DOWN_QUERY_JSON',
  queryJson
});

export const SQLGeneratorActionCreators = {
  setSQLQuery,
  setQueryJson,
  setDrillDownSQLQuery,
  setDrillDownQueryJson
};
