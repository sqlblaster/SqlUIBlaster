export const emptyExpressionReducers: {
  [K in 'Is empty' | 'Is not empty']: (columnName: string) => string;
} = {
  'Is empty': (column) => `${column} IS NULL`,
  'Is not empty': (column) => `${column} IS NOT NULL`
};
