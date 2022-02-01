import {
  fireEvent,
  getAllByText as getAllByTextOn,
  getByText as getByTextOn,
  wait
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
import { clickAddAFilter } from '../../../../../../../../AddFilter/__tests__/utils/click-add-a-filter';
import { addFilterText } from '../../../../../../../view';
import { dateOperators } from '../../../../operators';
import {
  getDateSetter,
  getTimeSetter
} from '../../../DatePickerByOperandsType/components/FixedDatePicker/__tests__/utils/date-time-setters';
import { addATimeText } from '../../../DatePickerByOperandsType/components/FixedDatePicker/view';
import { relativeDates } from '../../../DatePickerByOperandsType/components/RelativeDatePicker/singular-date-components';
import { variablePlaceholder } from '../../../DatePickerByOperandsType/components/VariableDatePicker';
import { dateOperandTypes } from '../../../DatePickerByOperandsType/date-operand-types';
import { dateVariablesMock } from '../../SingleDate/__tests__/utils/date-variables';

describe('Dates Between operation', () => {
  it(`should render sql query on:
        - default operands values with fixed dates
          - check for date limits
        - time enabled on first operand
        - time enabled on both operands
        - variable date operand and fixed date operand with time
        - relative date operand and fixed date operand with time
        - relative date operand and fixed date operand without time
        - variable date operand and fixed date operand without time
        - variable date operand and variable date operand
          - save button should be disabled when at least
            one variable operand is not picked
        - variable date operand and relative date operand
        - relative date operand and relative date operand
  `, async () => {
    const fixedDate1 = new Date(2019, 0, 1, 0, 0, 0, 0);
    const fixedDate2 = new Date(2019, 0, 2, 0, 0, 0, 0);
    const fixedTime1 = '06:00 AM';
    const fixedTime2 = '08:00 PM';

    const { getByText, getByTestId, rerender } = render();

    const setDate = getDateSetter(getByTestId);
    const setTime = getTimeSetter(getByTestId);
    const getOperand1Panel = () => getByTestId('between-operand-1');
    const getOperand2Panel = () => getByTestId('between-operand-2');
    let panel1;
    let panel2;

    const columns = selectATable();

    // Default operands values with fixed dates
    clickAddAFilter();
    fireEvent.click(getByText(regex(columns[2].name)));
    fireEvent.click(getByText(regex(dateOperators[0])));
    fireEvent.click(getByText(new RegExp(dateOperators[5])));
    setDate(fixedDate1, getOperand1Panel());
    setDate(fixedDate2, getOperand2Panel());
    // check for date limits
    expect(getByText(regex('Min date is')).textContent).toMatchSnapshot(
      'Min date is'
    );
    expect(getByText(regex('Min date message is')).textContent).toMatchSnapshot(
      'Min date message is'
    );
    expect(getByText(regex('Max date is')).textContent).toMatchSnapshot(
      'Max date is'
    );
    expect(getByText(regex('Max date message is')).textContent).toMatchSnapshot(
      'Max date message is'
    );

    clickAddTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      'Default operands values with fixed dates'
    );

    // Time enabled on first operand
    fireEvent.click(getByText(regex(columns[2].name)));
    panel1 = getOperand1Panel();
    fireEvent.click(getByTextOn(panel1, regex(addATimeText)));
    setTime(fixedTime1, panel1);
    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      'Time enabled on first operand'
    );

    // Time enabled on both operands
    fireEvent.click(getByText(regex(columns[2].name)));
    panel1 = getOperand1Panel();
    panel2 = getOperand2Panel();
    fireEvent.click(getByTextOn(panel2, regex(addATimeText)));
    setTime(fixedTime1, panel1);
    setTime(fixedTime2, panel2);
    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      'Time enabled on both operands'
    );

    // variable date operand and fixed date operand with time
    rerender({ variables: dateVariablesMock });
    fireEvent.click(getByText(regex(columns[2].name)));
    panel1 = getOperand1Panel();
    fireEvent.click(getByTextOn(panel1, dateOperandTypes[0]));
    fireEvent.click(getByTextOn(document.body, dateOperandTypes[1]));
    fireEvent.click(getByTextOn(panel1, variablePlaceholder));
    fireEvent.click(getByTextOn(document.body, dateVariablesMock[0].name));
    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      'variable date operand and fixed date operand with time'
    );

    // relative date operand and fixed date operand with time
    fireEvent.click(getByText(regex(columns[2].name)));
    panel1 = getOperand1Panel();
    fireEvent.click(getByTextOn(panel1, dateOperandTypes[1]));
    fireEvent.click(getByTextOn(document.body, dateOperandTypes[2]));
    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      'relative date operand and fixed date operand with time'
    );

    // relative date operand and fixed date operand without time
    fireEvent.click(getByText(regex(columns[2].name)));
    panel2 = getOperand2Panel();
    fireEvent.click(getByTextOn(panel2, regex('clear')));
    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      'relative date operand and fixed date operand without time'
    );

    // variable date operand and fixed date operand without time
    fireEvent.click(getByText(regex(columns[2].name)));
    panel1 = getOperand1Panel();
    fireEvent.click(getByTextOn(panel1, dateOperandTypes[2]));
    fireEvent.click(getByTextOn(document.body, dateOperandTypes[1]));
    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      'variable date operand and fixed date operand without time'
    );

    // variable date operand and variable date operand
    // save button should be disabled when at least one variable operand is not picked
    fireEvent.click(getByText(/clear/i));
    clickAddAFilter();
    fireEvent.click(getByText(regex(columns[2].name)));
    fireEvent.click(getByText(regex(dateOperators[0])));
    fireEvent.click(getByText(new RegExp(dateOperators[5])));
    panel1 = getOperand1Panel();
    panel2 = getOperand2Panel();
    fireEvent.click(getByTextOn(panel1, dateOperandTypes[0]));
    fireEvent.click(getByTextOn(document.body, dateOperandTypes[1]));
    fireEvent.click(getByTextOn(panel2, dateOperandTypes[0]));
    fireEvent.click(getAllByTextOn(document.body, dateOperandTypes[1])[2]);

    expect(getByText(addFilterText)).toBeDisabled();

    fireEvent.click(getByTextOn(panel1, variablePlaceholder));
    fireEvent.click(getByTextOn(document.body, dateVariablesMock[0].name));

    expect(getByText(addFilterText)).toBeDisabled();

    // waiting for when closing animation ends
    await wait();
    fireEvent.click(getByTextOn(panel2, variablePlaceholder));
    fireEvent.click(getByTextOn(document.body, dateVariablesMock[1].name));

    expect(getByText(addFilterText)).not.toBeDisabled();

    clickAddTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      'variable date operand and variable date operand'
    );

    // variable date operand and relative date operand
    fireEvent.click(getByText(regex(columns[2].name)));
    panel2 = getOperand2Panel();
    fireEvent.click(getByTextOn(panel2, dateOperandTypes[1]));
    fireEvent.click(getByTextOn(document.body, dateOperandTypes[2]));
    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      'variable date operand and relative date operand'
    );

    // relative date operand and relative date operand
    fireEvent.click(getByText(regex(columns[2].name)));
    panel1 = getOperand1Panel();
    panel2 = getOperand2Panel();
    fireEvent.click(getByTextOn(panel1, dateOperandTypes[1]));
    fireEvent.click(getAllByTextOn(document.body, dateOperandTypes[2])[1]);
    fireEvent.click(getByTextOn(panel1, regex(relativeDates[0])));
    fireEvent.click(getByTextOn(panel1, regex(relativeDates[1])));
    fireEvent.click(getByTextOn(panel2, regex(relativeDates[0])));
    fireEvent.click(getByTextOn(panel2, regex(relativeDates[2])));
    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      'relative date operand and relative date operand'
    );
  });
});
