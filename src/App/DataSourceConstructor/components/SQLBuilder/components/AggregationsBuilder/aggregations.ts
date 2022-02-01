export enum AggregationOperatorEnum {
  'Count of rows',
  'Sum of',
  'Average of',
  'Number of distinct values of',
  'Cumulative sum of',
  'Cumulative count of rows',
  'Standard deviation of',
  'Minimum of',
  'Maximum of'
}

export type AggregationOperator = keyof typeof AggregationOperatorEnum;

export const aggregationOperators: AggregationOperator[] = [
  'Count of rows',
  'Sum of',
  'Average of',
  'Number of distinct values of',
  'Cumulative sum of',
  'Cumulative count of rows',
  'Standard deviation of',
  'Minimum of',
  'Maximum of'
];
