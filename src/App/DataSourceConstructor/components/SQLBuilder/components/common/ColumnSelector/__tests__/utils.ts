import * as casual from 'casual';
import { Column } from 'src/App/DataSourceConstructor/schemas';
import { ColumnBranch } from '../ColumnItem/SelectedColumn.models';
import {
  filterColumns,
  getNewColumnBranch,
  getRootTableBranch,
  sortInOrderForeignColumnsBelow
} from '../utils';

const tableName = 'Users';

describe('getRootTableBranch', () => {
  it('should return instance of ColumnBranch with specified tableName', () => {
    const columnBranch = getRootTableBranch(tableName, tableName);
    expect(columnBranch).toMatchSnapshot();
  });
});

describe('getNewColumnBranch', () => {
  it('should return new ColumnBranch with defined columnName and type', () => {
    const name = 'username';
    const type: Column['type'] = 'number';

    const columnBranch = getNewColumnBranch(
      new ColumnBranch({
        foreignColumn: new ColumnBranch({
          foreignColumn: new ColumnBranch({
            tableName
          })
        })
      }).normalizeLastColumn(),
      new Column({ name, type })
    );

    expect(columnBranch).toMatchSnapshot();
  });
});

describe('sortInOrderForeignColumnsBelow', () => {
  it('should sort in order foreign columns in the bottom', () => {
    const column1 = new Column({ name: 'ID', type: 'primary' });
    const column2 = new Column({
      name: 'ProductID',
      foreignTableName: 'Products'
    });
    const column3 = new Column({ name: 'name' });
    const column4 = new Column({ name: 'AddedBy', foreignTableName: 'Users' });
    const columns = [column1, column2, column3, column4];

    const sortedColumns = sortInOrderForeignColumnsBelow(columns);

    expect(sortedColumns).toMatchSnapshot();
  });
});

describe('filterColumns', () => {
  const column1 = new Column({ name: 'FirstName', type: 'string' });
  const column2 = new Column({ name: 'Created At', type: 'Date' });
  const column3 = new Column({
    name: 'UserID',
    type: 'number',
    foreignTableName: 'Users'
  });
  const column4 = new Column({ name: 'number of name', type: 'number' });
  const columns: Column[] = [column1, column2, column3, column4];
  const tableBranch = new ColumnBranch({
    tableName
  });

  it(`should filter by filter callback
    should not remove foreign columns`, () => {
    const filteredColumns = filterColumns(
      columns,
      ({ columnName, type }) =>
        (type === 'number' || type === 'string') &&
        columnName.toLocaleLowerCase().endsWith('name'),
      tableBranch
    );

    expect(filteredColumns).toMatchSnapshot();
  });
});
