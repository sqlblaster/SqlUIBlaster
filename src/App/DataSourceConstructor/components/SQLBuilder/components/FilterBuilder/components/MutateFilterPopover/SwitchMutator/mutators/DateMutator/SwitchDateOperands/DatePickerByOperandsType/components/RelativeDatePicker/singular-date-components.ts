enum RelativeDateEnum {
  'Today',
  'Beginning of the current week',
  'End of the current week',
  'Beginning of the current month',
  'End of the current month',
  'Beginning of the current quarter',
  'End of the current quarter',
  'Beginning of the current year',
  'End of the current year'
}

export type RelativeDate = keyof typeof RelativeDateEnum;

export const relativeDates: RelativeDate[] = [
  'Today',
  'Beginning of the current week',
  'End of the current week',
  'Beginning of the current month',
  'End of the current month',
  'Beginning of the current quarter',
  'End of the current quarter',
  'Beginning of the current year',
  'End of the current year'
];
