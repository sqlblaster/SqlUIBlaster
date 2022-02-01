import { DateOperator } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/DateMutator/operators';
import { NearDateOperands } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/DateMutator/SwitchDateOperands/DateOperandsComponents/NearDate/model';
import { DateExpressionReducer } from '.';
import { addDateSql, truncDate } from './utils';

export const nearDateExpressionReducer: (
  operator: DateOperator
) => DateExpressionReducer<NearDateOperands> = operator => (
  column,
  { dateComponentType, includeCurrentDate, shiftAmount }
) => {
  const signMultiplier = operator === 'Previous' ? -1 : 1;

  const currentDateOperand = truncDate(
    dateComponentType,
    includeCurrentDate ? 'now()' : addDateSql(signMultiplier, dateComponentType)
  );
  const shiftDateOperand = truncDate(
    dateComponentType,
    addDateSql(signMultiplier * shiftAmount, dateComponentType)
  );

  const operands: [string, string] = [currentDateOperand, shiftDateOperand];
  operator === 'Previous' && operands.reverse();

  const [operand1, operand2] = operands;

  const columnExpr = truncDate(dateComponentType, column);

  return `
      ${columnExpr}
        >=
      ${operand1}
        AND
      ${columnExpr}
        <=
      ${operand2}`;
};
