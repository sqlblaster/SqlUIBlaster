enum PluralDateComponentEnum {
  'Seconds',
  'Minutes',
  'Hours',
  'Days',
  'Weeks',
  'Months',
  'Years'
}

export type PluralDateComponent = keyof typeof PluralDateComponentEnum;

export const pluralDateComponents: PluralDateComponent[] = [
  'Minutes',
  'Hours',
  'Days',
  'Weeks',
  'Months',
  'Years'
];
