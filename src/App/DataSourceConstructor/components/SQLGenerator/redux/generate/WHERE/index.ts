import { FilterAliased } from '../JOIN/models/ColumnAliased';
import { generateBooleanOperation } from './boolean';
import { generateDateOperation } from './date';
import { generateDrillDownOperation } from './drill-down';
import { generateForeignColumnOperation } from './foreign-column';
import { generateNumberOperation } from './number';
import { generateStringOperation } from './string';

export const generateWhere = (filters: FilterAliased[]): string => {
  let whereClause = '';

  if (filters && filters.length) {
    whereClause = `
    WHERE `;

    filters.forEach((filter, index) => {
      whereClause += `${
        index !== 0 ? ` ${filter.logicOperator}` : ''
      } ${getBrackets(filter.openingBracketsCount, true)}${generateOperation(
        filter
      )}${getBrackets(filter.closingBracketsCount, false)}`;
    });
  }

  return whereClause;
};

export const generateOperation = (filter: FilterAliased): string => {
  if (filter.operation.type === 'DrillDown') {
    return generateDrillDownOperation(filter);
  }

  const { foreignTableName, type } = filter.column.lastColumn;

  if (foreignTableName || type === 'primary' || type === 'uuid') {
    return generateForeignColumnOperation(filter);
  }

  switch (type) {
    case 'number':
      return generateNumberOperation(filter);
    case 'Date':
      return generateDateOperation(filter);
    case 'string':
      return generateStringOperation(filter);
    case 'boolean':
      return generateBooleanOperation(filter);
    default:
      throw new Error('unknown column type');
  }
};

export const getBrackets = (bracketsCount: number, openBracket: boolean) => {
  const bracket = openBracket ? '(' : ')';
  let brackets = '';

  for (let i = 0; i < bracketsCount; i++) {
    brackets += bracket;
  }

  return brackets;
};
