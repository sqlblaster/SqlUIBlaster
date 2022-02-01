import { CustomColumnAliased } from '../JOIN/models/ColumnAliased';
import { generateCustomColumnsSelection } from './custom-columns';

export const generateSelection = (
  groupBySelections: string,
  generatedAggregations: string,
  customColumns: CustomColumnAliased[],
  rootTableAlias: string
): string => {
  const generatedCustomSelections = generateCustomColumnsSelection(
    customColumns
  );

  return `
    SELECT
      ${groupBySelections}${
    generatedAggregations && groupBySelections ? ', ' : ''
  }${generatedAggregations}${
    !(generatedAggregations || groupBySelections)
      ? `${rootTableAlias ? `${rootTableAlias}.` : ''}*`
      : ''
  }${
    !(groupBySelections || generatedAggregations) && generatedCustomSelections
      ? `, ${generatedCustomSelections}`
      : ''
  }`;
};
