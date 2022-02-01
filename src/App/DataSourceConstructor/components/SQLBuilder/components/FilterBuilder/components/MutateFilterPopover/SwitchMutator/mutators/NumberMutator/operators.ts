enum NumberOperatorEnum {
  'Equal to',
  'Not equal to',
  'Greater than',
  'Greater than or equal to',
  'Less than',
  'Less than or equal to',
  'Between',
  'Is empty',
  'Is not empty'
}

export type NumberOperator = keyof typeof NumberOperatorEnum;

export const numberOperators: NumberOperator[] = [
  'Equal to',
  'Not equal to',
  'Greater than',
  'Greater than or equal to',
  'Less than',
  'Less than or equal to',
  'Between',
  'Is empty',
  'Is not empty'
];
