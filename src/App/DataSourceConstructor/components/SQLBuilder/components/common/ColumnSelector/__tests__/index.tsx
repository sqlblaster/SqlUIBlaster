import * as React from 'react';
import { Table } from 'src/App/DataSourceConstructor/schemas';
import { getConfiguredRender } from 'src/App/DataSourceConstructor/test-utils/configured-render';
import { WithReduxProvider } from 'src/App/DataSourceConstructor/test-utils/contexts-provider/with-ReduxProvider';
import { getCertainCalledProps } from 'src/App/DataSourceConstructor/test-utils/react-utils';
import { getStore } from 'src/App/DataSourceConstructor/test-utils/store/getStore';
import { ColumnSelector } from '..';
import { ColumnSelectorOwnProps, TableColumnsProps } from '../props';
import { TableColumns } from '../view';

jest.mock('../view', () => ({
  TableColumns: jest.fn(() => null)
}));

const render = getConfiguredRender<ColumnSelectorOwnProps>(
  <ColumnSelector
    onColumnSelected={jest.fn()}
    popoverPositionUpdater={undefined}
  />
);

describe('ColumnSelector', () => {
  const TableColumnsMock = TableColumns as jest.Mock;

  afterEach(() => {
    TableColumnsMock.mockClear();
  });

  it('should not render TableColumns component if there is no picked table', () => {
    render(
      {},
      {
        contextProviderApplicators: [
          WithReduxProvider(
            getStore({
              selectedTable: null
            })
          )
        ]
      }
    );

    expect(TableColumnsMock).not.toHaveBeenCalled();
  });

  it(`should pass initial level value, root table branch,
    and redux states to TableColumns component`, () => {
    const tableName = 'Users';

    render(
      {},
      {
        contextProviderApplicators: [
          WithReduxProvider(
            getStore({
              selectedTable: new Table({ name: tableName })
            })
          )
        ]
      }
    );

    const certainProps = getCertainCalledProps<TableColumnsProps>(
      TableColumnsMock,
      ['level', 'tableBranch']
    );

    expect(certainProps).toMatchSnapshot();
  });
});
