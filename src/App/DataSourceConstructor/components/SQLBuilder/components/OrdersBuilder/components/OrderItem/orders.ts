enum SortOrderEnum {
  'ascending',
  'descending'
}

export type SortOrder = keyof typeof SortOrderEnum;

export const sortOrders: SortOrder[] = [
  'ascending',
  'descending'
];
