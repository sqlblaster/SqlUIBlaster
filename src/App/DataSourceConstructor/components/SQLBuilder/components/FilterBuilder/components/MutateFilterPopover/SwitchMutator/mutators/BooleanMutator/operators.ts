enum BooleanOperatorEnum {
  'Is true',
  'Is false',
  'Is empty',
  'Is not empty'
}

export type BooleanOperator = keyof typeof BooleanOperatorEnum;

export const booleanOperators: BooleanOperator[] = [
  'Is true',
  'Is false',
  'Is empty',
  'Is not empty'
];
