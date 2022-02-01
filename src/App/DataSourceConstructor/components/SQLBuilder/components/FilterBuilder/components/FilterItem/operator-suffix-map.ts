import { Operation } from '../MutateFilterPopover/Operation';

export const operatorSuffixMap: {
  [K in Operation['operator']]: string
} = {
  // Number operators
  'Equal to': 'is equal to',
  'Not equal to': 'is not equal to',
  'Greater than': 'is greater than',
  'Greater than or equal to': 'is greater than or equal to',
  'Less than': 'is less than',
  'Less than or equal to': 'is less than or equal to',
  Between: 'between',
  'Is empty': 'is empty',
  'Is not empty': 'is not empty',
  // String operators
  Is: 'is',
  'Is not': 'is not',
  Contains: 'contains',
  'Does not contain': 'does not contain',
  'Starts with': 'starts with',
  'Ends with': 'ends with',
  // Date operators
  Previous: '',
  Next: '',
  Before: 'is before',
  After: 'is after',
  On: 'is at',
  // boolean operators
  'Is true': 'is true',
  'Is false': 'is false',
  // ForeignColumn operator
  ForeignColumnOperator: 'is',
  // DrillDown operator
  DrillDownOperator: '',
};
