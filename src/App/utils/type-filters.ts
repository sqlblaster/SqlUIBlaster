/**
 * Returns excluded fields of type T from source type
 */
export type GetExcludedFieldsOf<TFields, TFrom> = Pick<
  TFrom,
  Exclude<keyof TFrom, keyof TFields>
>;
