import { NumberOperands } from './NumberOperation';
import { NumberOperator } from './operators';

export const getDefaultOperands = (
  operator: NumberOperator
): NumberOperands => {
  if (operator === 'Between') {
    return [0, 0];
  } else if (operator === 'Is empty' || operator === 'Is not empty') {
    return undefined;
  } else {
    return 0;
  }
};
