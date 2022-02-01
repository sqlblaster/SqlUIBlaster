import { tablesMock } from 'src/components/query-builder/App/DataSourceConstructor/redux/tables/tables.mock';
import { generateSQLQuery, SQLGeneratorStateProps } from '..';

const state: SQLGeneratorStateProps = {
  selectedTable: tablesMock[0],
  customColumns: [],
  filters: [],
  aggregations: [],
  groupings: [],
  orders: [],
  rowLimit: null,
  tables: tablesMock
};

describe('LIMIT clause', () => {
  it('should render nothing when there is no rows limit', () => {
    expect(generateSQLQuery(state)).toMatchSnapshot();
  });

  it('should be rendered when there is a rows limit', () => {
    expect(generateSQLQuery({ ...state, rowLimit: 100 })).toMatchSnapshot();
  });
});
