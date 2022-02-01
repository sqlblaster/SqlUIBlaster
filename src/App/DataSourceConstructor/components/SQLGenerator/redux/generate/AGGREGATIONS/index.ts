import { formatColumn } from '../common-formatters';
import { AggregationAliased } from '../JOIN/models/ColumnAliased';
import { AggregatioinsAliasCounter } from './AliasCounter';
import { operatorToSqlAggregatorMap } from './operator-to-sql-aggregator-map';

export const generateAggregations = (
  aggregations: AggregationAliased[]
): string => {
  AggregatioinsAliasCounter.resetCounters();
  let generatedAggregations = '';

  aggregations.forEach(({ operator, column: columnBranch }, index) => {
    const aggregator = operatorToSqlAggregatorMap[operator];

    let column = '*';
    const counter = AggregatioinsAliasCounter.getCounter(columnBranch, operator);
    if (columnBranch) {
      const {
        lastColumn: { tableAlias, columnName }
      } = columnBranch;
      column = formatColumn(columnName, tableAlias);
    }

    generatedAggregations += `${aggregator(column, columnBranch, counter)}${
      index === aggregations.length - 1 ? '' : ', '
    }`;
  });

  return generatedAggregations;
};
