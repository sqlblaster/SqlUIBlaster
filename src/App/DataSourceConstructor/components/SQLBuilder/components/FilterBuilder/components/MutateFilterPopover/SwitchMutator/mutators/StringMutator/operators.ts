enum StringOperatorEnum {
  'Is',
  'Is not',
  'Contains',
  'Does not contain',
  'Starts with',
  'Ends with',
  'Is empty',
  'Is not empty'
}

export type StringOperator = keyof typeof StringOperatorEnum;

export const stringOperators: StringOperator[] = [
  'Is',
  'Is not',
  'Contains',
  'Does not contain',
  'Starts with',
  'Ends with',
  'Is empty',
  'Is not empty'
];
