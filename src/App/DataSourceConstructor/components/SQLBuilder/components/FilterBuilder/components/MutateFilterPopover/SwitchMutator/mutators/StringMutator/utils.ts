import { StringOperator } from './operators';

export const hasCaseSensivity = (operator: StringOperator): boolean => {
  switch (operator) {
    case 'Contains':
    case 'Does not contain':
    case 'Starts with':
    case 'Ends with':
      return true;
    default:
      return false;
  }
};
