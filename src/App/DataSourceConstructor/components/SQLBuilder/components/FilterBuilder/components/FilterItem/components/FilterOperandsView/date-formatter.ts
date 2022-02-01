import * as moment from 'moment';
import { DateOperator } from '../../../MutateFilterPopover/SwitchMutator/mutators/DateMutator/operators';
import { CoupleDateOperands } from '../../../MutateFilterPopover/SwitchMutator/mutators/DateMutator/SwitchDateOperands/DateOperandsComponents/CoupleDates/model';
import { NearDateOperands } from '../../../MutateFilterPopover/SwitchMutator/mutators/DateMutator/SwitchDateOperands/DateOperandsComponents/NearDate/model';
import { SingleDateOperands } from '../../../MutateFilterPopover/SwitchMutator/mutators/DateMutator/SwitchDateOperands/DateOperandsComponents/SingleDate/model';

export const formatNearDateOperands = (
  operands: NearDateOperands,
  operator: DateOperator
): string => {
  if (!operands) {
    return '';
  }

  const { shiftAmount, dateComponentType } = operands;

  return `${
    operator === 'Previous' ? 'Past' : 'Next'
  } ${shiftAmount} ${dateComponentType}`;
};

export const formatSingleDateOperands = (
  operands: SingleDateOperands
): string => {
  switch (operands.dateType) {
    case 'Fixed date':
      return moment(operands.date).format(
        `MMMM DD, YYYY${operands.timeEnabled ? ', hh:mm a' : ''}`
      );
    case 'Relative date':
      return operands.relativeDate.toLowerCase();
    default:
      return '';
  }
};

export const formatCoupleDateOperands = (
  operands: CoupleDateOperands
): [string, string] => [
  formatSingleDateOperands(operands[0]),
  formatSingleDateOperands(operands[1])
];
