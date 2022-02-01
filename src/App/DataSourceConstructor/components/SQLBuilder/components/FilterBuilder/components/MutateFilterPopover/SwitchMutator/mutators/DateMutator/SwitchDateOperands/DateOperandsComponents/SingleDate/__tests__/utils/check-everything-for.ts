import {
  cleanup,
  fireEvent,
  getByText as getByTextOn
} from 'react-testing-library';
import {
  getGeneratedQuery,
  render
} from 'src/App/DataSourceConstructor/components/SQLBuilder/__tests__/render.utils';
import {
  clickAddTheFilter,
  clickUpdateTheFilter
} from 'src/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/__tests__/utils/filter-utils';
import { selectATable } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/TableSelector/__tests__/utils/select-table';
import { regex } from 'src/App/DataSourceConstructor/test-utils/utils';
import { clickAddAFilter } from '../../../../../../../../../AddFilter/__tests__/utils/click-add-a-filter';
import { updateFilterText } from '../../../../../../../../view';
import { DateOperator, dateOperators } from '../../../../../operators';
import {
  getDateSetter,
  getTimeSetter
} from '../../../../DatePickerByOperandsType/components/FixedDatePicker/__tests__/utils/date-time-setters';
import { addATimeText } from '../../../../DatePickerByOperandsType/components/FixedDatePicker/view';
import { relativeDates } from '../../../../DatePickerByOperandsType/components/RelativeDatePicker/singular-date-components';
import {
  noVariablesText,
  variablePlaceholder
} from '../../../../DatePickerByOperandsType/components/VariableDatePicker';
import { dateOperandTypes } from '../../../../DatePickerByOperandsType/date-operand-types';
import { dateVariablesMock } from './date-variables';

export const checkEverythingFor = (operator: DateOperator) => {
  afterEach(cleanup);

  it(`should render sql queries properly on '${operator}' operator:
    on all cases:
      - Fixed date:
        - With date only
        - With date and time
        - Enabled time to be disabled
      - Variable date:
        - When there are no variables should show appropriate text and can't save
        - When there are variables should show placeholder and can't save
        - Should pick one of variables and save
      - All Relative date cases`, () => {
    const fixedDate = new Date(2019, 0, 1, 0, 0, 0, 0);

    const { getByText, getAllByText, getByTestId, rerender } = render();

    const setDate = getDateSetter(getByTestId);
    const setTime = getTimeSetter(getByTestId);

    const columns = selectATable();

    // Fixed date - With date only
    clickAddAFilter();
    fireEvent.click(getByText(regex(columns[2].name)));
    fireEvent.click(getByText(regex(dateOperators[0])));
    fireEvent.click(getByText(new RegExp(operator)));
    setDate(fixedDate);
    clickAddTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      `'${operator}' operator - Fixed date - With date only`
    );

    // Fixed date - With date and default time
    fireEvent.click(getByText(regex(columns[2].name)));
    fireEvent.click(getByText(regex(addATimeText)));
    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      `${operator}' operator - Fixed date - With date and default time`
    );

    // Fixed date - With certain time
    fireEvent.click(getByText(regex(columns[2].name)));
    setTime('06:00 AM');
    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      `${operator}' operator - Fixed date - With certain time`
    );

    // Fixed date - When enabled time is disabled
    fireEvent.click(getByText(regex(columns[2].name)));
    const mutatorPanel = getByTestId('mutate-filter');
    fireEvent.click(getByTextOn(mutatorPanel, /clear/i));
    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      `'${operator}' operator - Fixed date - When enabled time is disabled`
    );

    // When there are no variables should show appropriate text and can't save
    fireEvent.click(getByText(regex(columns[2].name)));
    fireEvent.click(getByText(regex(dateOperandTypes[0])));
    fireEvent.click(getByText(regex(dateOperandTypes[1])));
    expect(getByText(noVariablesText)).toBeInTheDocument();
    expect(getByText(updateFilterText)).toBeDisabled();

    // When there are variables should show placeholder and can't save
    rerender({
      variables: dateVariablesMock
    });
    expect(getByText(variablePlaceholder)).toBeInTheDocument();
    expect(getByText(updateFilterText)).toBeDisabled();

    // Should pick one of variables and save
    fireEvent.click(getByText(variablePlaceholder));
    fireEvent.click(getByText(dateVariablesMock[0].name));
    expect(getAllByText(dateVariablesMock[0].name).length).toBe(2);
    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      `'${operator}' operator - Should pick one of variables and save`
    );

    // Relative date utils
    const checkNextRelativeDate = (
      prevRelativeDateIndex: number,
      nextRelativeDateIndex: number
    ) => {
      fireEvent.click(getByText(regex(columns[2].name)));
      fireEvent.click(
        getByTextOn(
          getByTestId('mutate-filter'),
          regex(relativeDates[prevRelativeDateIndex])
        )
      );
      fireEvent.click(getByText(regex(relativeDates[nextRelativeDateIndex])));
      clickUpdateTheFilter();

      expect(getGeneratedQuery()).toMatchSnapshot(
        `'${operator}' operator - Relative date - ${relativeDates[nextRelativeDateIndex]}`
      );
    };

    // Relative default date - Today
    fireEvent.click(getByText(regex(columns[2].name)));
    fireEvent.click(getByText(regex(dateOperandTypes[1])));
    fireEvent.click(getByText(regex(dateOperandTypes[2])));
    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      `'${operator}' operator - Relative default date - Today`
    );

    relativeDates.forEach((relativeDate, index) => {
      index && checkNextRelativeDate(index - 1, index);
    });
  });
};
