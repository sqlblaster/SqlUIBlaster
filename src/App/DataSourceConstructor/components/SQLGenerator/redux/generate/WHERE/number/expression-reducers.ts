import { NumberOperands } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/NumberMutator/NumberOperation';
import { NumberOperator } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/NumberMutator/operators';
import { emptyExpressionReducers } from '../empty-expression-reducers';
import { ExpressionReducer } from '../expression-reducer.model';

export type NumberExpressionReducer<
  TNumberOperands extends NumberOperands = any
> = ExpressionReducer<TNumberOperands>;

export const reduceSingleOperandExpression = (
  operator: string
): NumberExpressionReducer<number> => (column, operands) =>
  `${column} ${operator} ${operands}`;

export const expressionReducersByOperator: {
  [K in NumberOperator]: NumberExpressionReducer
} = {
  'Equal to': reduceSingleOperandExpression('='),
  'Not equal to': reduceSingleOperandExpression('<>'),
  'Greater than': reduceSingleOperandExpression('>'),
  'Greater than or equal to': reduceSingleOperandExpression('>='),
  'Less than': reduceSingleOperandExpression('<'),
  'Less than or equal to': reduceSingleOperandExpression('<='),
  Between: (column, operands: [number, number]) => {
    const [operand1, operand2] = operands.sort((a, b) => a - b);

    return `
      ${column} >= ${operand1}
        AND
      ${column} <= ${operand2}`;
  },
  ...emptyExpressionReducers
};
