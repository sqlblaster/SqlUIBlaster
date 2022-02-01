import { FilterAliased } from '../../JOIN/models/ColumnAliased';
import { getColumnString } from '../utils';

export const generateForeignColumnOperation = ({
  column: { lastColumn },
  operation,
  variables
}: FilterAliased): string => {
  const variable = !(variables instanceof Array) ? variables : null;
  const record = operation.type === 'Foreign' ? operation.operands : null;

  let operand: string = '';
  if (variable) {
    operand = `$${variable.order}::uuid`;
  } else if (record) {
    operand = `'${record.id}'`;
  } else {
    throw new Error('invalid foreign filter');
  }

  return `${getColumnString(lastColumn)} = ${operand}`;
};
