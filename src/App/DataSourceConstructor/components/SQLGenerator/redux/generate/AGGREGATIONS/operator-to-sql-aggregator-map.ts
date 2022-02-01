import { AggregationOperator } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/AggregationsBuilder/aggregations';
import { ColumnBranchAliased } from '../JOIN/models/ColumnAliased';
import { getAlias } from './utils';

export type SqlAggregator = (
  column: string,
  columnBranch: ColumnBranchAliased | undefined,
  counter: string
) => string;

export const basicSqlAggregatorHOF: (
  functionName: string,
  operator: AggregationOperator
) => SqlAggregator = (functionName, operator) => (
  column,
  columnBranch,
  counter
) => {
  const alias = getAlias(columnBranch, operator);

  return `${functionName}(${column}) AS "${alias}${counter}"`;
};

export const distinctCounterSqlAggregator: SqlAggregator = (
  column,
  columnBranch,
  counter
) => {
  const expression =
    columnBranch && columnBranch.lastColumn.type === 'Date'
      ? `date_trunc('day', ${column})`
      : column;
  const alias = getAlias(columnBranch, 'Distinct count of');

  return `count(distinct ${expression}) AS "${alias}${counter}"`;
};

export const operatorToSqlAggregatorMap: {
  [K in AggregationOperator]: SqlAggregator
} = {
  'Count of rows': basicSqlAggregatorHOF('count', 'Count of rows'),
  'Sum of': basicSqlAggregatorHOF('sum', 'Sum of'),
  'Average of': basicSqlAggregatorHOF('avg', 'Average of'),
  'Number of distinct values of': distinctCounterSqlAggregator,
  'Cumulative sum of': basicSqlAggregatorHOF('sum', 'Cumulative sum of'),
  'Cumulative count of rows': basicSqlAggregatorHOF(
    'count',
    'Cumulative count of rows'
  ),
  'Standard deviation of': basicSqlAggregatorHOF(
    'stddev',
    'Standard deviation of'
  ),
  'Minimum of': basicSqlAggregatorHOF('min', 'Minimum of'),
  'Maximum of': basicSqlAggregatorHOF('max', 'Maximum of')
};
