import { DateOperation } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/DateMutator/DateOperation';
import { emptyExpressionReducers } from '../../empty-expression-reducers';
import { ExpressionReducer } from '../../expression-reducer.model';
import { coupleDateExpressionReducer } from './couple-date';
import { nearDateExpressionReducer } from './near-date';
import { singleDateExpressionReducer } from './single-date';

export type DateExpressionReducer<
  TDateOperands extends DateOperation['operands'] = any
> = ExpressionReducer<TDateOperands>;

export const expressionReducersByOperator: {
  [K in DateOperation['operator']]: DateExpressionReducer
} = {
  Previous: nearDateExpressionReducer('Previous'),
  Next: nearDateExpressionReducer('Next'),
  Before: singleDateExpressionReducer('Before'),
  After: singleDateExpressionReducer('After'),
  On: singleDateExpressionReducer('On'),
  Between: coupleDateExpressionReducer,
  ...emptyExpressionReducers
};
