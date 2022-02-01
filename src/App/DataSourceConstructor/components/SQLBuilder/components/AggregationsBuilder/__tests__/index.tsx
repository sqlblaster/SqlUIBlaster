import {
  fireEvent,
  getByText as getByTextOn,
  queryByText as queryByTextOn
} from 'react-testing-library';
import { backIconPlaceholder } from 'src/__tests__/utils/mock-placeholders';
import { regex } from 'src/App/DataSourceConstructor/test-utils/utils';
import { getGeneratedQuery, render } from '../../../__tests__/render.utils';
import { aggregationsBuilderLabel } from '../../../labels';
import { aggregationOperators } from '../../AggregationsBuilder/aggregations';
import {
  clickAddAAggregation,
  clickAddMoreAggregation
} from '../../AggregationsBuilder/components/AddAggregation/__tests__/utils/click-add-a-aggregation';
import { selectAColumn } from '../../common/ColumnSelector/__tests__/utils/select-a-column';
import { selectATable } from '../../TableSelector/__tests__/utils/select-table';
import { addAggregationText } from '../components/AddAggregation/view';
import { getTips } from '../components/MutateAggregationPopover/AggregationTips/tips';

describe('Aggregations Builder', () => {
  const { getByText, queryByText, getAllByText, getByTestId } = render();

  const columns = selectATable();

  const aggregationsBuilderPanel = getByTextOn(
    document.body,
    regex(aggregationsBuilderLabel)
  );

  const clickOnAggregation = (columnName: string) => {
    fireEvent.click(getByTextOn(aggregationsBuilderPanel, regex(columnName)));
  };

  const showsAppropriateLabel = (
    aggregation: typeof aggregationOperators[0]
  ) => {
    const label = getByText(regex(aggregation));

    expect(label.textContent).toMatchSnapshot();
  };

  const removeAnAggregation = () => {
    fireEvent.click(getAllByText(/clear/i)[0]);
  };

  const countOfRowsAggregation = aggregationOperators[0];
  const sumOfAggregation = aggregationOperators[1];
  const numberOfDistinctValuesAggregation = aggregationOperators[3];
  const cumulitiveCountOfRowsAggregation = aggregationOperators[5];
  const aNumberColumn = columns[3];

  const checkNumberTypeAggregation = (
    aggregation: typeof aggregationOperators[0]
  ) => {
    clickAddMoreAggregation();
    fireEvent.click(getByText(aggregation));

    const columnSelectorPanel = getByTestId('column-selector');

    // shows only number columns
    columns.forEach(column => {
      if (column.type === 'number' || column.foreignTableName) {
        expect(
          getByTextOn(columnSelectorPanel, column.name)
        ).toBeInTheDocument();
      } else {
        expect(
          queryByTextOn(columnSelectorPanel, column.name)
        ).not.toBeInTheDocument();
      }
    });

    selectAColumn(aNumberColumn, {
      container: getByTestId('column-selector')
    });

    showsAppropriateLabel(aggregation);

    expect(getGeneratedQuery()).toMatchSnapshot();
    removeAnAggregation();
  };

  it('should show the add aggregation placeholder', () => {
    expect(getByText(addAggregationText)).toBeInTheDocument();
  });

  it('should show the tips messages', () => {
    clickAddAAggregation();

    aggregationOperators.forEach(aggregation => {
      const tips = getTips(aggregation);

      expect(getByText(regex(tips))).toBeInTheDocument();
    });

    fireEvent.click(document.body);
  });

  it(`should add the 'Count of rows' aggregation'`, () => {
    clickAddAAggregation();

    fireEvent.click(getByText(countOfRowsAggregation));

    showsAppropriateLabel(countOfRowsAggregation);

    expect(getGeneratedQuery()).toMatchSnapshot();
  });

  it('should hide the add aggregation placeholder', () => {
    expect(queryByText(addAggregationText)).not.toBeInTheDocument();
  });

  it(`should update aggregation into 'Sum of'`, () => {
    clickOnAggregation(countOfRowsAggregation);
    fireEvent.click(getByText(sumOfAggregation));
    selectAColumn(aNumberColumn);

    showsAppropriateLabel(sumOfAggregation);

    expect(getGeneratedQuery()).toMatchSnapshot();
  });

  it(`should update aggregation into 'Cumulitive count of rows' using back button`, () => {
    clickOnAggregation(sumOfAggregation);
    fireEvent.click(getByText(backIconPlaceholder));
    fireEvent.click(getByText(cumulitiveCountOfRowsAggregation));

    showsAppropriateLabel(cumulitiveCountOfRowsAggregation);

    expect(getGeneratedQuery()).toMatchSnapshot();
  });

  it('should generate indexation for duplicate column aggregations', () => {
    clickAddMoreAggregation();
    fireEvent.click(getAllByText(cumulitiveCountOfRowsAggregation)[1]);

    expect(getGeneratedQuery()).toMatchSnapshot();
  });

  it('should remove aggregation', () => {
    removeAnAggregation();
    removeAnAggregation();

    expect(getGeneratedQuery()).toMatchSnapshot();
  });

  it('should show the add aggregation placeholder again', () => {
    expect(getByText(addAggregationText)).toBeInTheDocument();
  });

  it(`should add 'Number of Distinct values of a date' and apply certain formatting`, () => {
    clickAddMoreAggregation();
    fireEvent.click(getByText(numberOfDistinctValuesAggregation));

    // should show all column types for number of distinct values
    columns.forEach(column => {
      expect(getByText(column.name)).toBeInTheDocument();
    });

    const createdAtColumn = columns[2];
    selectAColumn(createdAtColumn);

    showsAppropriateLabel(numberOfDistinctValuesAggregation);

    expect(getGeneratedQuery()).toMatchSnapshot();
    removeAnAggregation();
  });

  it(`should add 'Average of ' aggregation`, () => {
    const averageOfAggregation = aggregationOperators[2];
    checkNumberTypeAggregation(averageOfAggregation);
  });

  it(`should add 'Cumulative sum of ' aggregation`, () => {
    const cumulitiveSumOfAggregation = aggregationOperators[4];
    checkNumberTypeAggregation(cumulitiveSumOfAggregation);
  });

  it(`should add 'Standard deviation of ' aggregation`, () => {
    const deviationOfAggregation = aggregationOperators[6];
    checkNumberTypeAggregation(deviationOfAggregation);
  });

  it(`should add 'Minimum of ' aggregation`, () => {
    const minimumOfAggregation = aggregationOperators[7];
    checkNumberTypeAggregation(minimumOfAggregation);
  });

  it(`should add 'Maximum of ' aggregation`, () => {
    const maximumOfAggregation = aggregationOperators[8];
    checkNumberTypeAggregation(maximumOfAggregation);
  });

  it(`should generate certain aggregation alias for foreign column`, () => {
    clickAddMoreAggregation();
    fireEvent.click(getByText(sumOfAggregation));

    const productForeignColumn = columns[5];
    const { foreignColumns } = selectAColumn(productForeignColumn, {
      expand: true
    });

    const availableAmountColumn = foreignColumns[2];
    selectAColumn(availableAmountColumn);

    expect(getGeneratedQuery()).toMatchSnapshot();
  });
});
