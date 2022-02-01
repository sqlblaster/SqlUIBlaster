import {
  fireEvent,
  getByText as getByTextOn,
  queryByText as queryByTextOn
} from 'react-testing-library';
import { regex } from 'src/App/DataSourceConstructor/test-utils/utils';
import { getGeneratedQuery, render } from '../../../__tests__/render.utils';
import { customColumnsBuilderLabel } from '../../../labels';
import { aggregationOperators } from '../../AggregationsBuilder/aggregations';
import {
  clickAddAAggregation,
  getAggregationsBuilderPanel
} from '../../AggregationsBuilder/components/AddAggregation/__tests__/utils/click-add-a-aggregation';
import { selectAColumn } from '../../common/ColumnSelector/__tests__/utils/select-a-column';
import {
  clickAddAGrouping,
  getGroupingsBuilderPanel
} from '../../GroupingsBuilder/components/AddGrouping/__tests__/utils/click-add-a-grouping';
import { selectATable } from '../../TableSelector/__tests__/utils/select-table';
import {
  clickAddACustomColumn,
  clickAddMoreCustomColumn
} from '../components/AddCustomColumn/__tests__/utils/click-add-a-custom-column';
import { addCustomColumnPlaceholder } from '../components/AddCustomColumn/view';
import { hiddenCustomColumnsText } from '../view';

describe('Custom Columns Builder', () => {
  it(`should be able to
        shows the add custom column placeholder,
        add the 1 lvl custom column,
        hide the add custom column placeholder,
        update custom column to another one,
        add one more 1 lvl custom column,
        check that 1st 1 lvl column is not available,
        remove that custom column,
        hide custom columns on aggregations or groupings presence,
        show previous added custom columns
        after all aggregations and groupings removed`, async () => {
    const { getByText, queryByText, getAllByText } = render();

    const columns = selectATable();

    const customColumnsBuilderPanel = getByTextOn(
      document.body,
      regex(customColumnsBuilderLabel)
    );

    const clickOnCustomColumn = (columnName: string) => {
      fireEvent.click(
        getByTextOn(customColumnsBuilderPanel, regex(columnName))
      );
    };

    // shows the add custom column placeholder
    expect(getByText(addCustomColumnPlaceholder)).toBeInTheDocument();

    // add the 1 lvl custom column
    clickAddACustomColumn();
    const { foreignColumns, foreignColumnsPanel } = selectAColumn(columns[5], {
      expand: true,
      container: customColumnsBuilderPanel
    });
    selectAColumn(foreignColumns[1], {
      container: foreignColumnsPanel
    });

    expect(getGeneratedQuery()).toMatchSnapshot('add the 1 lvl custom column');

    // hides the add custom column placeholder
    expect(queryByText(addCustomColumnPlaceholder)).not.toBeInTheDocument();

    // update custom column to another one
    clickOnCustomColumn(foreignColumns[1].name);
    const { foreignColumnsPanel: foreignColumnsPanel1 } = selectAColumn(
      columns[5],
      {
        expand: true,
        container: customColumnsBuilderPanel
      }
    );
    selectAColumn(foreignColumns[2], {
      container: foreignColumnsPanel1
    });

    expect(getGeneratedQuery()).toMatchSnapshot(
      'update custom column to another one'
    );

    // add one more 1 lvl custom column
    clickAddMoreCustomColumn();

    // check that 1st 1 lvl column is not available
    const { foreignColumnsPanel: foreignColumnsPanel2 } = selectAColumn(
      columns[5],
      { expand: true }
    );
    if (!foreignColumnsPanel2) {
      throw new Error(`Couldn't get Foreign column fields panel`);
    }
    expect(
      queryByTextOn(foreignColumnsPanel2, regex(foreignColumns[2].name))
    ).toBeFalsy();

    const {
      foreignColumns: foreignColumns2,
      foreignColumnsPanel: foreignColumnsPanel3
    } = selectAColumn(columns[6], {
      expand: true
    });
    selectAColumn(foreignColumns2[2], { container: foreignColumnsPanel3 });

    expect(getGeneratedQuery()).toMatchSnapshot(
      'add one more 1 lvl custom column'
    );

    // remove custom column
    fireEvent.click(getAllByText(/clear/i)[0]);

    expect(getGeneratedQuery()).toMatchSnapshot('remove custom column');

    // hide custom columns on aggregations or groupings presence
    clickAddAAggregation();
    fireEvent.click(getByText(regex(aggregationOperators[5])));

    expect(customColumnsBuilderPanel).toHaveTextContent(
      hiddenCustomColumnsText
    );

    clickAddAGrouping();
    selectAColumn(columns[3]);

    expect(customColumnsBuilderPanel).toHaveTextContent(
      hiddenCustomColumnsText
    );

    // show previous added custom columns after all aggregations and groupings removed
    fireEvent.click(getByTextOn(getAggregationsBuilderPanel(), /clear/i));

    expect(customColumnsBuilderPanel).toHaveTextContent(
      hiddenCustomColumnsText
    );

    fireEvent.click(getByTextOn(getGroupingsBuilderPanel(), /clear/i));

    expect(customColumnsBuilderPanel).not.toHaveTextContent(
      hiddenCustomColumnsText
    );
  });
});
