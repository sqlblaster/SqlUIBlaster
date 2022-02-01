import * as React from 'react';
import { tablesMock } from 'src/components/query-builder/App/DataSourceConstructor/redux/tables/tables.mock';
import { Column, Table } from 'src/components/query-builder/App/DataSourceConstructor/schemas';
import { getConfiguredRender } from 'src/components/query-builder/App/DataSourceConstructor/test-utils/configured-render';
import { ColumnItem } from '../ColumnItem';
import { ColumnBranch } from '../ColumnItem/SelectedColumn.models';
import { TableColumnsProps } from '../props';
import { filterColumns, sortInOrderForeignColumnsBelow } from '../utils';
import { TableColumns } from '../view';

jest.mock('../ColumnItem', () => ({
  ColumnItem: jest.fn(() => null)
}));
jest.mock('../utils', () => ({
  filterColumns: jest.fn((columns) => columns),
  sortInOrderForeignColumnsBelow: jest.fn((columns) => columns),
  getNewColumnBranch: jest.fn()
}));

const render = getConfiguredRender<TableColumnsProps>(
  <TableColumns
    level={0}
    onColumnSelected={jest.fn()}
    tableBranch={new ColumnBranch()}
    tables={tablesMock}
    tableName='Users'
    popoverPositionUpdater={undefined}
  />
);

describe('TableColumns', () => {
  it(`should call filterColumns if filter callback supplied
    and should call sortInOrderForeignColumnsBelow`, () => {
    render({
      canShowColumnBranch: () => true
    });

    expect(filterColumns).toHaveBeenCalled();
    expect(sortInOrderForeignColumnsBelow).toHaveBeenCalled();
  });

  it('should show a message when there are no columns', () => {
    const { queryByTestId } = render({ tableName: '' });

    expect(queryByTestId('no-columns')).toBeDefined();
  });

  it('should render columns', () => {
    const columnsCount = 3;
    (ColumnItem as unknown as jest.Mock).mockClear();

    render({
      tables: [
        new Table({
          name: 'Users',
          columns: [
            new Column({ name: '1' }),
            new Column({ name: '2' }),
            new Column({ name: '3' })
          ]
        })
      ]
    });

    expect(ColumnItem).toHaveBeenCalledTimes(columnsCount);
  });
});
