import { QueryJSON } from 'src/App/DataSourceConstructor/components/SQLGenerator/redux/query-json.model';
import {
  PickStates,
  State
} from 'src/store/models/State';
import { generateAggregations } from './AGGREGATIONS';
import { generateGroupings } from './GROUPINGS';
import { generateJoins } from './JOIN';
import { constructTreeTable } from './JOIN/construct-table-tree';
import { getAllColumnBranches } from './JOIN/get-all-columns';
import { generateOrderBy } from './ORDERBY';
import { generateSelection } from './SELECT';
import { generateWhere } from './WHERE';

export type SQLGeneratorStateProps = PickStates<
  | 'selectedTable'
  | 'customColumns'
  | 'filters'
  | 'aggregations'
  | 'groupings'
  | 'orders'
  | 'rowLimit'
  | 'tables'
>;

export const generateSQLQuery = ({
  selectedTable,
  customColumns,
  filters,
  aggregations,
  groupings,
  orders,
  rowLimit,
  tables
}: SQLGeneratorStateProps): string => {
  let query = '';
  const tableName = selectedTable && selectedTable.name;

  const {
    allColumnBranches,
    customColumnsAliased,
    filtersAliased,
    aggregationsAliased,
    groupingsAliased,
    ordersAliased
  } = getAllColumnBranches(
    filters,
    aggregations,
    groupings,
    orders,
    customColumns
  );

  const rootTreeTable = constructTreeTable(allColumnBranches, tables);

  const joins = generateJoins(rootTreeTable);
  const { groupBySelections, groupBy, groupingsOrderBy } = generateGroupings(
    groupingsAliased,
    ordersAliased
  );
  const generatedAggregations = generateAggregations(aggregationsAliased);
  const where = generateWhere(filtersAliased);
  const orderBy = generateOrderBy(ordersAliased, groupingsOrderBy);

  const isValid = !!tableName;

  query =
    // tslint:disable-next-line: prefer-template
    `${generateSelection(
      groupBySelections,
      generatedAggregations,
      customColumnsAliased,
      rootTreeTable.alias
    )}
    FROM "${tableName}" ${
      rootTreeTable.alias ? `"${rootTreeTable.alias}"` : ''
    }` +
    joins +
    where +
    groupBy +
    orderBy +
    `${
      rowLimit
        ? `
    LIMIT ${rowLimit}`
        : ''
    }`;

  return isValid ? query : '';
};

export const generateSQLQueryJSON = ({
  selectedTable,
  aggregations,
  filters,
  groupings,
  orders,
  customColumns,
  rowLimit
}: State): QueryJSON =>
  new QueryJSON({
    tableName: selectedTable ? selectedTable.name : '',
    aggregations,
    filters,
    groupings,
    orders,
    customColumns,
    rowLimit
  });
