import {
  fireEvent,
  getAllByText as getAllByTextOn,
  getByText as getByTextOn,
  queryByText as queryByTextOn
} from 'react-testing-library';
import { regex } from 'src/components/query-builder/App/DataSourceConstructor/test-utils/utils';
import { getGeneratedQuery, render } from '../../../__tests__/render.utils';
import { ordersBuilderLabel } from '../../../labels';
import { selectAColumn } from '../../common/ColumnSelector/__tests__/utils/select-a-column';
import {
  clickAddAGrouping,
  clickAddMoreGrouping
} from '../../GroupingsBuilder/components/AddGrouping/__tests__/utils/click-add-a-grouping';
import {
  clickAddAnOrder,
  clickAddMoreOrder
} from '../../OrdersBuilder/components/AddOrder/__tests__/utils/click-add-an-order';
import { selectATable } from '../../TableSelector/__tests__/utils/select-table';
import { addOrderText } from '../components/AddOrder/view';
import { sortOrders } from '../components/OrderItem/orders';

describe('Orders Builder', () => {
  const { getByText, queryByText, getByTestId } = render();

  const columns = selectATable();

  const ordersBuilderPanel = getByTextOn(
    document.body,
    regex(ordersBuilderLabel)
  );

  const clickOnOrder = (columnName: string) => {
    fireEvent.click(getByTextOn(ordersBuilderPanel, regex(columnName)));
  };

  const removeAnOrder = () => {
    fireEvent.click(getAllByTextOn(ordersBuilderPanel, /clear/i)[0]);
  };

  const detailsColumn = columns[1];
  const createdAtColumn = columns[2];

  const checkWhiteList = (whiteList: string[]) => {
    const columnSelectorPanel = getByTestId('column-selector');

    columns.forEach(column => {
      if (whiteList.includes(column.name) || column.foreignTableName) {
        expect(
          getByTextOn(columnSelectorPanel, column.name)
        ).toBeInTheDocument();
      } else {
        expect(
          queryByTextOn(columnSelectorPanel, column.name)
        ).not.toBeInTheDocument();
      }
    });
  };

  it('should show the add order placeholder', () => {
    expect(getByText(addOrderText)).toBeInTheDocument();
  });

  it(`should add an order`, () => {
    clickAddAnOrder();

    fireEvent.click(getByText(detailsColumn.name));

    expect(getGeneratedQuery()).toMatchSnapshot();
  });

  it('should hide the add order placeholder', () => {
    expect(queryByText(addOrderText)).not.toBeInTheDocument();
  });

  it('should update order', () => {
    clickOnOrder(detailsColumn.name);

    selectAColumn(createdAtColumn);

    expect(getGeneratedQuery()).toMatchSnapshot();
  });

  it(`should add foreign column order properly
      and hide already added column`, () => {
    clickAddMoreOrder();

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

  it(`should remove all orders except the grouping columns
      when a grouping added and show only picked grouping column
      available for order column`, () => {
    clickAddAGrouping();

    selectAColumn(detailsColumn);

    clickAddMoreOrder();

    const columnSelectorPanel = getByTestId('column-selector');

    columns.forEach(column => {
      if (column.name === detailsColumn.name || column.foreignTableName) {
        expect(
          getByTextOn(columnSelectorPanel, column.name)
        ).toBeInTheDocument();
      } else {
        expect(
          queryByTextOn(columnSelectorPanel, column.name)
        ).not.toBeInTheDocument();
      }
    });

    selectAColumn(detailsColumn, { container: columnSelectorPanel });

    const ascendingOrder = sortOrders[0];
    const descendingOrder = sortOrders[1];
    fireEvent.click(getByTextOn(ordersBuilderPanel, regex(ascendingOrder)));
    fireEvent.click(getByTextOn(ordersBuilderPanel, regex(descendingOrder)));

    expect(getGeneratedQuery()).toMatchSnapshot();
  });

  it('should show only not selected columns among grouping columns only', () => {
    removeAnOrder();

    clickAddMoreGrouping();
    selectAColumn(createdAtColumn);

    clickAddAnOrder();

    checkWhiteList([createdAtColumn.name, detailsColumn.name]);

    selectAColumn(detailsColumn, { container: ordersBuilderPanel });

    clickAddMoreOrder();

    checkWhiteList([createdAtColumn.name]);
  });

  it('should show the add order placeholder again', () => {
    removeAnOrder();

    expect(getByText(addOrderText)).toBeInTheDocument();
  });
});
