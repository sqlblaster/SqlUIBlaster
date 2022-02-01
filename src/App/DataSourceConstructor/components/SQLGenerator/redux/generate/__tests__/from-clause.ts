import { tablesMock } from 'src/components/query-builder/App/DataSourceConstructor/redux/tables/tables.mock';
import { generateSQLQuery, SQLGeneratorStateProps } from '..';

const state: SQLGeneratorStateProps = {
  selectedTable: null,
  customColumns: [],
  filters: [],
  aggregations: [],
  groupings: [],
  orders: [],
  rowLimit: null,
  tables: tablesMock
};

describe('FROM clause', () => {
  it('should render nothing when there is no selected table', () => {
    expect(generateSQLQuery(state)).toMatchSnapshot();
  });

  it('should render properly when there is selected table', () => {
    expect(
      generateSQLQuery({ ...state, selectedTable: tablesMock[0] })
    ).toMatchSnapshot();

    expect(
      generateSQLQuery({ ...state, selectedTable: tablesMock[1] })
    ).toMatchSnapshot();
  });
});
