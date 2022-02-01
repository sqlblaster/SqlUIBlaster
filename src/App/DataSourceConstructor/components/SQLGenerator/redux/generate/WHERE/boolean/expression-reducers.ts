import { BooleanOperator } from '../../../../../SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/BooleanMutator/operators';
import { emptyExpressionReducers } from '../empty-expression-reducers';
import { ExpressionReducer } from '../expression-reducer.model';

export type BooleanExpressionReducer = ExpressionReducer;

export const reduceNonNullExpression = (
  value: string
): BooleanExpressionReducer => (column) =>
  `${column} = ${value}`;

export const expressionReducersByOperator: {
  [K in BooleanOperator]: BooleanExpressionReducer
} = {
  'Is true': reduceNonNullExpression('true'),
  'Is false': reduceNonNullExpression('false'),
  ...emptyExpressionReducers
};
