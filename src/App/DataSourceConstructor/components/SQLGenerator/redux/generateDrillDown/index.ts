import { State } from 'src/components/query-builder/store/models/State';
import { CustomColumn } from '../../../SQLBuilder/components/CustomColumnsBuilder/components/CustomColumnItem/model';
import { Filter } from '../../../SQLBuilder/components/FilterBuilder/components/FilterItem/model';
import { Grouping } from '../../../SQLBuilder/components/GroupingsBuilder/components/GroupingItem/model';
import { DrillDownOperation } from '../generate/WHERE/drill-down/model';
import { QueryJSON } from '../query-json.model';

const uniqBy = <T extends Object>(arr: T[], prop: string = 'id'): T[] =>
  Array.from(new Map(arr.map(it => [it[prop], it])).values());

export const getDrillDownState = (
  state: State,
  drillDownQueryJson: QueryJSON
): State => {
  const {
    aggregations,
    groupings,
    customColumns,
    orders,
    rowLimit
  } = drillDownQueryJson;

  return {
    ...state,
    aggregations,
    groupings,
    orders: orders.length ? orders : state.orders,
    customColumns: uniqBy([...state.customColumns, ...customColumns], 'id'),
    rowLimit,
    filters: [
      ...wrapToBrackets(state.filters),
      ...getDrillDownFiltersFrom(state.groupings, state.variables.length)
    ]
  };
};

export const wrapToBrackets = (filters: Filter[]): Filter[] => {
  const bracketedFilters = [...filters];

  if (bracketedFilters.length) {
    const firstFilter = bracketedFilters[0];
    bracketedFilters[0] = {
      ...firstFilter,
      openingBracketsCount: firstFilter.openingBracketsCount + 1
    };

    const lastFilter = bracketedFilters[bracketedFilters.length - 1];
    bracketedFilters[bracketedFilters.length - 1] = {
      ...lastFilter,
      closingBracketsCount: lastFilter.closingBracketsCount + 1
    };
  }

  return bracketedFilters;
};

export const getDrillDownFiltersFrom = (
  groupings: Grouping[],
  nextVariableOrder: number = 0
): Filter[] => {
  const filters: Filter[] = [];

  groupings.forEach(({ column }, index) => {
    filters.push(
      new Filter({
        column,
        operation: new DrillDownOperation({
          operands: nextVariableOrder + index + 1
        })
      })
    );
  });

  return filters;
};
