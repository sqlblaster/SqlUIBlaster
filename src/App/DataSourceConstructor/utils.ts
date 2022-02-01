import { Table } from 'src/App/DataSourceConstructor/schemas';
import { State } from 'src/store/models/State';
import { Variable } from 'src/schema';
import { DataSourceConstructorProps } from './props';

export const getTable = (tableName: string, tables: Table[]) =>
  tables.find(table => table.name === tableName) || null;

export const getNewState = (
  initialQuery: DataSourceConstructorProps['initialQuery'],
  state: State
): State => {
  let stateFromInitialQuery: Partial<State> = {};
  if (initialQuery) {
    const { tableName, ...queryStates } = initialQuery;

    const { tables } = state;
    const selectedTable = getTable(tableName, tables);

    stateFromInitialQuery = {
      selectedTable,
      ...queryStates
    };
  }

  return {
    ...state,
    ...stateFromInitialQuery
  };
};

export const preprocessVariables = (
  variables: Variable[] | undefined
): Variable[] =>
  variables
    ? variables.map((variable, index) => {
        return {
          ...variable,
          order: index + 1
        };
      })
    : [];
