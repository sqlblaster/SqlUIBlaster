import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import {
  SQLGeneratorDispatchProps,
  SQLGeneratorOwnProps,
  SQLGeneratorStateProps
} from './props';
import { SQLGenerator as View } from './view';
import { format as formatSql } from 'sql-formatter';

export const SQLGenerator = connect<
  SQLGeneratorStateProps,
  SQLGeneratorDispatchProps,
  SQLGeneratorOwnProps,
  State
>(({ sqlQuery }) => ({
  sqlQuery: sqlQuery ? formatSql(sqlQuery) : 'No Sql Query Yet'
}))(View);
