import { DateOperator } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/DateMutator/operators';
import { SingleDateOperands } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/DateMutator/SwitchDateOperands/DateOperandsComponents/SingleDate/model';
import { FixedDateOperands } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/DateMutator/SwitchDateOperands/DatePickerByOperandsType/components/FixedDatePicker/model';
import { RelativeDateOperands } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/DateMutator/SwitchDateOperands/DatePickerByOperandsType/components/RelativeDatePicker/model';
import { VariableDateOperands } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/DateMutator/SwitchDateOperands/DatePickerByOperandsType/components/VariableDatePicker/model';
import { DateExpressionReducer } from '.';
import { dateOperand1 } from './before-after';
import { getRelativeDateSqlExp, toSqlDate, truncDate } from './utils';

export const singleDateOperatorToSignMap: {
  [K in DateOperator]?: '<' | '>' | '='
} = {
  Before: '<',
  After: '>',
  On: '='
};

export const getSingleVariableOrder = (
  variable: Parameters<ReturnType<typeof singleDateExpressionReducer>>[2]
): false | number => {
  if (!(variable instanceof Array)) {
    return !!variable && variable.order;
  } else {
    throw new Error('expected single variable');
  }
};

export const singleDateExpressionReducer: (
  operator: DateOperator
) => DateExpressionReducer<SingleDateOperands> = operator => (
  column,
  operands,
  variable
) => {
  switch (operands.dateType) {
    case 'Fixed date':
      return fixedDateExpressionReducer(operator)(column, operands, variable);
    case 'Relative date':
      return relativeDateExpressionReducer(operator)(
        column,
        operands,
        variable
      );
    case 'Variable date':
      return variableDateExpressionReducer(operator)(
        column,
        operands,
        variable
      );
    default:
      throw new Error('invalid operands date type');
  }
};

export const fixedDateExpressionReducer: (
  operator: DateOperator
) => DateExpressionReducer<FixedDateOperands> = operator => (
  column,
  { date, timeEnabled }
) => {
  return commonSingleDateExpressionReducer(
    operator,
    column,
    `${toSqlDate(new Date(date))}::timestamp`,
    timeEnabled,
    timeEnabled ? 'Minutes' : 'Days'
  );
};

export const variableDateExpressionReducer: (
  operator: DateOperator
) => DateExpressionReducer<VariableDateOperands> = operator => (
  column,
  operands,
  variable
) => {
  const order = getSingleVariableOrder(variable);

  return commonSingleDateExpressionReducer(
    operator,
    column,
    `$${order}::timestamp`,
    false,
    'Days'
  );
};

export const relativeDateExpressionReducer: (
  operator: DateOperator
) => DateExpressionReducer<RelativeDateOperands> = operator => (
  column,
  { relativeDate }
) => {
  const relativeDateExpr = getRelativeDateSqlExp(relativeDate);

  return commonSingleDateExpressionReducer(
    operator,
    column,
    relativeDateExpr,
    false,
    'Days'
  );
};

export const commonSingleDateExpressionReducer = (
  operator: DateOperator,
  column: string,
  operandExpr: string,
  timeEnabled: boolean,
  format: Parameters<typeof truncDate>[0]
): string => {
  const columnExpr = `${column}::timestamp`;

  switch (operator) {
    case 'Before':
      return dateOperand1(columnExpr, timeEnabled).before.dateOperand2(
        operandExpr
      );
    case 'After':
      return dateOperand1(columnExpr, timeEnabled).after.dateOperand2(
        operandExpr
      );
    case 'On':
      return `
      ${truncDate(format, columnExpr)}
        =
      ${truncDate(format, operandExpr)}`;
    default:
      throw new Error('invalid single date operator');
  }
};
