import { combineEpics } from 'redux-observable';
import { SQLBuilderEpics } from '../components/SQLBuilder/redux/epics';
import { generateSQLQueryEpic } from '../components/SQLGenerator/redux/epic';
import { extractTablesEpic } from './tables/epic';

export const dataSourceConstructorEpics = combineEpics(
  extractTablesEpic,
  SQLBuilderEpics,
  generateSQLQueryEpic,
);
