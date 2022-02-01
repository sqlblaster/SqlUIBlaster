import { AggregationOperator } from '../../../aggregations';

export const aggregationOperatorToTipsMap: {
  [K in AggregationOperator]: string
} = {
  'Count of rows': 'Total number of rows in the answer',
  'Sum of': 'Sum of the values of a column',
  'Average of': 'Average of the values of a column',
  'Number of distinct values of':
    'Number of unique values of a column among all the rows in the answer',
  'Cumulative sum of':
    'Additive sum of all the values of a column. e.x. total revenue over time',
  'Cumulative count of rows':
    'Additive count of the number of rows. e.x. total number of sales over time',
  'Standard deviation of':
    'Number which expresses how much the value of a column vary among all rows in the answer',
  'Minimum of': 'Minimum value of a column',
  'Maximum of': 'Maximum value of a column'
};

export const getTips = (operator: AggregationOperator): string =>
  aggregationOperatorToTipsMap[operator];
