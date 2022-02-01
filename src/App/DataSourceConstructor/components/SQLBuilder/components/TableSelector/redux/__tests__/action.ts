import { Table } from 'src/App/DataSourceConstructor/schemas';
import { selectTable, SelectTableAction } from '../action';

describe('TableSelector selectTable action creator', () => {
  it('should return appropriate action', () => {
    const table = new Table();
    const expectedAction: SelectTableAction = {
      type: 'SELECT_TABLE',
      table
    };

    expect(selectTable(table)).toEqual(expectedAction);
  });
});
