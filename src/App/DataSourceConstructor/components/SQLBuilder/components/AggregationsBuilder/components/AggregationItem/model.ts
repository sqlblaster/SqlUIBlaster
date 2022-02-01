import { Column } from 'src/App/DataSourceConstructor/schemas';
import * as uuid from 'uuid';
import { ColumnBranch } from '../../../common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { AggregationOperator } from '../../aggregations';

export class Aggregation {

  public id: string;
  public operator: AggregationOperator;
  public column: ColumnBranch | undefined;
  public columnFilterTypes: ColumnFilterType[];

  constructor(...inits: Partial<Aggregation>[]) {
    Object.assign(this, ...inits);

    if (!this.id) {
      this.id = uuid();
    }

    this.columnFilterTypes = Aggregation.getExpectedColumnsTypeFrom(
      this.operator
    );
    !this.columnFilterTypes.length && (this.column = undefined);
  }

  public static hasNoColumn(operator: AggregationOperator): boolean {
    return (
      operator === 'Count of rows' || operator === 'Cumulative count of rows'
    );
  }

  public static getExpectedColumnsTypeFrom(
    operator: AggregationOperator
  ): Aggregation['columnFilterTypes'] {
    if (operator === 'Number of distinct values of') {
      return ['all'];
    } else if (!Aggregation.hasNoColumn(operator)) {
      return ['number'];
    } else {
      return [];
    }
  }
}

export type ColumnFilterType = Column['type'] | 'all' | undefined;
