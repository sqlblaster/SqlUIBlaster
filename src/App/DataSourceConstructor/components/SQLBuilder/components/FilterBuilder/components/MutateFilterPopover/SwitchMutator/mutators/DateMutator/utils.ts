import { DateOperation } from './DateOperation';
import { CoupleDateOperation } from './SwitchDateOperands/DateOperandsComponents/CoupleDates/model';
import { EmptyDateOperation } from './SwitchDateOperands/DateOperandsComponents/EmptyDates/model';
import { NearDateOperation } from './SwitchDateOperands/DateOperandsComponents/NearDate/model';
import { SingleDateOperation } from './SwitchDateOperands/DateOperandsComponents/SingleDate/model';

export const getDateOperationVia = (
  operator: DateOperation['operator']
): DateOperation => {
  switch (operator) {
    case 'Previous':
    case 'Next':
      return new NearDateOperation({ operator });
    case 'Before':
    case 'After':
    case 'On':
      return new SingleDateOperation({ operator });
    case 'Between':
      return new CoupleDateOperation({ operator });
    case 'Is empty':
    case 'Is not empty':
    default:
      return new EmptyDateOperation({ operator });
  }
};
