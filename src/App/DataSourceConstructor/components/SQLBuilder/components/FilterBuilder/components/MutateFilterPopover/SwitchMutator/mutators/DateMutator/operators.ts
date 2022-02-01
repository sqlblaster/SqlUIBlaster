enum DateOperatorEnum {
  'Previous',
  'Next',
  'Before',
  'After',
  'On',
  'Between',
  'Is empty',
  'Is not empty'
}

export type DateOperator = keyof typeof DateOperatorEnum;

export const dateOperators: DateOperator[] = [
  'Previous',
  'Next',
  'Before',
  'After',
  'On',
  'Between',
  'Is empty',
  'Is not empty'
];
