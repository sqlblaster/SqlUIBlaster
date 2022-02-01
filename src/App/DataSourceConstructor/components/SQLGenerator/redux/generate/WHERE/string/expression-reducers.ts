import { StringOperator } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/StringMutator/operators';
import { StringOperands } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/StringMutator/StringOperation';
import { emptyExpressionReducers } from '../empty-expression-reducers';

export const preprocessOperand = (
  operand: StringOperands,
  variableOrder: Parameters<StringExpressionReducer>[2]
): string => (variableOrder ? `$${variableOrder}::text` : `'${operand}'`);

export type StringExpressionReducer = (
  columnName: string,
  operand: StringOperands,
  variableOrder: number | null | false,
  caseSensitive: boolean
) => string;

export const handleEqualityOperator = (
  sign: string
): StringExpressionReducer => (column, operand, variableOrder) =>
  `${column}::text ${sign} ${preprocessOperand(operand, variableOrder)}`;

export const handleLikeOperator = (
  operator: StringOperator
): StringExpressionReducer => (
  column,
  operand,
  variableOrder,
  caseSensitive
) => {
  const preprocessedOperand = preprocessOperand(operand, variableOrder);

  return `${caseSensitive ? `${column}::text` : `lower(${column}::text)`}${
    operator === 'Does not contain' ? ' NOT' : ''
  } LIKE concat(${operator === 'Starts with' ? '' : `'%', `}${
    caseSensitive ? preprocessedOperand : `lower(${preprocessedOperand})`
  }${operator === 'Ends with' ? '' : `, '%'`})`;
};

export const expressionReducersByOperator: {
  [K in StringOperator]: StringExpressionReducer
} = {
  Is: handleEqualityOperator('='),
  'Is not': handleEqualityOperator('<>'),
  Contains: handleLikeOperator('Contains'),
  'Does not contain': handleLikeOperator('Does not contain'),
  'Starts with': handleLikeOperator('Starts with'),
  'Ends with': handleLikeOperator('Ends with'),
  ...emptyExpressionReducers
};
