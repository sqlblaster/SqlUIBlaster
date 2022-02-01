import { CoupleDateOperands } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/DateMutator/SwitchDateOperands/DateOperandsComponents/CoupleDates/model';
import { SingleDateOperands } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/DateMutator/SwitchDateOperands/DateOperandsComponents/SingleDate/model';
import { DateExpressionReducer } from '.';
import { dateOperand1 } from './before-after';
import { getSingleVariableOrder } from './single-date';
import { getRelativeDateSqlExp, toSqlDate } from './utils';

export const getCoupleVariableOrders = (
  variables: Parameters<typeof getSingleVariableOrder>[0]
): [number | false, number | false] => {
  if (variables instanceof Array) {
    return [
      getSingleVariableOrder(variables[0]),
      getSingleVariableOrder(variables[1])
    ];
  } else {
    return [false, false];
  }
};

export const coupleDateExpressionReducer: DateExpressionReducer<
  CoupleDateOperands
> = (column, operands, variables) => {
  const [operand1, operand2] = operands;

  const [order1, order2] = getCoupleVariableOrders(variables);

  const columnExpr = `${column}`;
  const operand1Expr = getExpression(operand1, order1);
  const operand2Expr = getExpression(operand2, order2);

  return `
    CASE WHEN
      ${operand1Expr}
        <
      ${operand2Expr}
        THEN
          ${dateOperand1(
            columnExpr,
            operand1.dateType === 'Fixed date' && operand1.timeEnabled
          ).after.dateOperand2(operand1Expr)}
            AND
          ${dateOperand1(
            columnExpr,
            operand2.dateType === 'Fixed date' && operand2.timeEnabled
          ).before.dateOperand2(operand2Expr)}
        ELSE
          ${dateOperand1(
            columnExpr,
            operand2.dateType === 'Fixed date' && operand2.timeEnabled
          ).after.dateOperand2(operand2Expr)}
            AND
          ${dateOperand1(
            columnExpr,
            operand1.dateType === 'Fixed date' && operand1.timeEnabled
          ).before.dateOperand2(operand1Expr)}
        END`;
};

export const getExpression = (
  operand: SingleDateOperands,
  variableOrder: number | false
): string => {
  switch (operand.dateType) {
    case 'Fixed date':
      const sqlDate = toSqlDate(new Date(operand.date));

      return `${
        operand.timeEnabled ? `${sqlDate}::timestamp` : `${sqlDate}::date`
      }`;
    case 'Variable date':
      return `$${variableOrder}::date`;
    case 'Relative date':
      return getRelativeDateSqlExp(operand.relativeDate);
    default:
      throw new Error('Unexpected date type');
  }
};
