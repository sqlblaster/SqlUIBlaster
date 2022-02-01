import { Reducer, ReducersMapObject } from 'redux';
import {
  SetDrillDownQueryJsonAction,
  SetDrillDownSQLQueryAction,
  SetQueryJsonAction,
  SetSQLQueryAction
} from './action';
import { QueryJSON } from './query-json.model';
import { SQLGeneratorState } from './state';

export const sqlQuery: Reducer<
  SQLGeneratorState['sqlQuery'],
  SetSQLQueryAction
> = (state = '', { type, query }) => {
  return type === 'SET_SQL_QUERY' ? query : state;
};

export const queryJson: Reducer<
  SQLGeneratorState['queryJson'],
  SetQueryJsonAction
> = (state = new QueryJSON(), { type, queryJson: newQueryJson }) => {
  return type === 'SET_SQL_QUERY_JSON' ? newQueryJson : state;
};

export const drillDownSqlQuery: Reducer<
  SQLGeneratorState['drillDownSqlQuery'],
  SetDrillDownSQLQueryAction
> = (state = '', { type, query }) => {
  return type === 'SET_DRILL_DOWN_SQL_QUERY' ? query : state;
};

export const drillDownQueryJson: Reducer<
  SQLGeneratorState['drillDownQueryJson'],
  SetDrillDownQueryJsonAction
> = (state = new QueryJSON(), { type, queryJson: newQueryJson }) => {
  return type === 'SET_DRILL_DOWN_QUERY_JSON' ? newQueryJson : state;
};

export const SQLGeneratorReducers: ReducersMapObject<SQLGeneratorState, any> = {
  sqlQuery,
  queryJson,
  drillDownSqlQuery,
  drillDownQueryJson
};
