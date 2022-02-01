import { Filter } from '../../../../SQLBuilder/components/FilterBuilder/components/FilterItem/model';

export type ExpressionReducer<TOperandsType = undefined> = (
  columnName: string,
  operands: TOperandsType,
  variables?: Filter['variables']
) => string;
