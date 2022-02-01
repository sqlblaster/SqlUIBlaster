import {
  fireEvent,
  getByText as getByTextOn,
  queryByText as queryByTextOn
} from 'react-testing-library';
import { regex } from 'src/components/query-builder/App/DataSourceConstructor/test-utils/utils';
import { getGeneratedQuery, render } from '../../../__tests__/render.utils';
import { groupingsBuilderLabel } from '../../../labels';
import { selectAColumn } from '../../common/ColumnSelector/__tests__/utils/select-a-column';
import {
  clickAddAGrouping,
  clickAddMoreGrouping
} from '../../GroupingsBuilder/components/AddGrouping/__tests__/utils/click-add-a-grouping';
import { selectATable } from '../../TableSelector/__tests__/utils/select-table';
import { addGroupingText } from '../components/AddGrouping/view';

describe('Groupings Builder', () => {
  const { getByText, queryByText, getAllByText, getByTestId } = render();

  const columns = selectATable();

  const groupingsBuilderPanel = getByTextOn(
    document.body,
    regex(groupingsBuilderLabel)
  );

  const clickOnGrouping = (columnName: string) => {
    fireEvent.click(getByTextOn(groupingsBuilderPanel, regex(columnName)));
  };

  const removeAGrouping = () => {
    fireEvent.click(getAllByText(/clear/i)[0]);
  };

  const detailsColumn = columns[1];
  const createdAtColumn = columns[2];

  it('should show the add grouping placeholder', () => {
    expect(getByText(addGroupingText)).toBeInTheDocument();
  });

  it(`should add a grouping`, () => {
    clickAddAGrouping();

    fireEvent.click(getByText(detailsColumn.name));

    expect(getGeneratedQuery()).toMatchSnapshot();
  });

  it('should hide the add grouping placeholder', () => {
    expect(queryByText(addGroupingText)).not.toBeInTheDocument();
  });

  it('should update grouping', () => {
    clickOnGrouping(detailsColumn.name);

    selectAColumn(createdAtColumn);

    expect(getGeneratedQuery()).toMatchSnapshot();
  });

  it(`should add foreign column grouping properly
      and hide already added column`, () => {
    clickAddMoreGrouping();

    // hide already added column
    const columnSelector = getByTestId('column-selector');
    columns.forEach(column => {
      if (column.name === createdAtColumn.name) {
        expect(
          queryByTextOn(columnSelector, createdAtColumn.name)
        ).not.toBeInTheDocument();
      } else {
        expect(queryByTextOn(columnSelector, column.name)).toBeInTheDocument();
      }
    });

    const productColumn = columns[5];
    const {
      foreignColumns: foreignProductColumns,
      foreignColumnsPanel: foreignProductColumnsPanel
    } = selectAColumn(productColumn, { expand: true });
    const currencyColumn = foreignProductColumns[4];
    const { foreignColumns: foreignCurrencyColumns } = selectAColumn(
      currencyColumn,
      {
        expand: true,
        container: foreignProductColumnsPanel
      }
    );
    const currencyName = foreignCurrencyColumns[1];
    selectAColumn(currencyName);

    expect(getGeneratedQuery()).toMatchSnapshot();
  });

  it('should remove grouping', () => {
    removeAGrouping();
    removeAGrouping();

    expect(getGeneratedQuery()).toMatchSnapshot();
  });

  it('should show the add grouping placeholder again', () => {
    expect(getByText(addGroupingText)).toBeInTheDocument();
  });
});
