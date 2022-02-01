import { Operation } from '../../../MutateFilterPopover/Operation';
import { DateOperation } from '../../../MutateFilterPopover/SwitchMutator/mutators/DateMutator/DateOperation';
import { CoupleOperandsViewProps } from './components/CoupleOperandsView';
import { SingleOperandViewProps } from './components/SingleOperandView';
import {
  formatCoupleDateOperands,
  formatNearDateOperands,
  formatSingleDateOperands
} from './date-formatter';

export const hasOperands = (operator: Operation['operator']): boolean => {
  switch (operator) {
    case 'Is empty':
    case 'Is not empty':
    case 'Is true':
    case 'Is false':
      return false;
    default:
      return true;
  }
};

export const getFormattedDateOperand = (operation: DateOperation): string => {
  switch (operation.operator) {
    case 'Previous':
    case 'Next':
      return formatNearDateOperands(operation.operands, operation.operator);
    case 'Before':
    case 'After':
    case 'On':
      return formatSingleDateOperands(operation.operands);
    default:
      return '';
  }
};

export const getFormattedCoupleOperands = (
  operation: Operation
): CoupleOperandsViewProps['operands'] => {
  if (operation.type === 'Date' && operation.operands instanceof Array) {
    return formatCoupleDateOperands(operation.operands);
  } else if (
    operation.type === 'Number' &&
    operation.operands instanceof Array
  ) {
    return operation.operands;
  } else {
    throw new Error('expected between operands');
  }
};

export const getFormattedSingleOperand = (
  operation: Operation
): SingleOperandViewProps['operand'] => {
  if (
    hasOperands(operation.operator) &&
    !(operation.operands instanceof Array) &&
    hasOperands(operation.operator)
  ) {
    switch (operation.type) {
      case 'Foreign': {
        const record = operation.operands;

        return record && record.title ? record.title : '';
      }
      case 'Date':
        return getFormattedDateOperand(operation);
      case 'Number':
      case 'String':
      default:
        return <number | string>operation.operands;
    }
  } else {
    throw new Error('expected singular operand');
  }
};
