import { AggregationOperator } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/AggregationsBuilder/aggregations';
import { ColumnBranchAliased } from '../JOIN/models/ColumnAliased';
import { getAlias } from './utils';

export class AggregatioinsAliasCounter {

  private static counters: { [column: string]: number } = {};
  public static getCounter(
    columnBranch: ColumnBranchAliased | undefined,
    operator: AggregationOperator
  ): string {
    const alias = getAlias(columnBranch, operator);

    if (AggregatioinsAliasCounter.has(alias)) {
      AggregatioinsAliasCounter.counters[alias]++;
    } else {
      AggregatioinsAliasCounter.counters[alias] = 0;
    }

    const counter = AggregatioinsAliasCounter.counters[alias];

    return counter === 0 ? '' : counter.toString();
  }

  public static resetCounters() {
    AggregatioinsAliasCounter.counters = {};
  }

  private static has(column: string): boolean {
    return AggregatioinsAliasCounter.counters[column] !== undefined;
  }
}
