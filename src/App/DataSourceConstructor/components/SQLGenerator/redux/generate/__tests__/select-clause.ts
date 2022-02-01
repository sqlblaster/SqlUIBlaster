import { tablesMock } from 'src/App/DataSourceConstructor/redux/tables/tables.mock';
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

describe('FROM clause', () => {
  it('should render * when there is no aggregations and groupings', () => {
    expect(generateSQLQuery(state)).toMatchSnapshot();
  });

  it.skip('should render groupings when there is only groupings', () => {
    // empty block
  });

  it.skip('should render aggregations when there is only aggregations', () => {
    // empty block
  });

  it.skip(`should render aggregations and groupings
      when there is aggregations and groupings `, () => {
    // empty block
  });
});
