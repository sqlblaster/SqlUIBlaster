import {
  fireEvent,
  getByDisplayValue as getByDisplayValueOn,
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
import {
  getByText$,
  regex
} from 'src/App/DataSourceConstructor/test-utils/utils';
import { clickAddAFilter } from '../../../../../../../../AddFilter/__tests__/utils/click-add-a-filter';
import { mutatorPanelId } from '../../../../../../../view';
import { DateOperator } from '../../../../operators';
import {
  PluralDateComponent,
  pluralDateComponents
} from '../plural-date-components';

describe('Previous and Next date operations', () => {
  it(`should render proper sql query on:
        - Both Previous and Next operators
        - All kind of date components
        - Including and excluding the current date component
      should check the shift amount text field,
      should check the proper filter description render
  `, async () => {
    const {
      getByText,
      getByTestId,
      getByLabelText,
      componentNode,
      debug
    } = render();

    const columns = selectATable();
    const dateColumnName = columns[2].name;

    const clickOnFilter = () => {
      fireEvent.click(getByText(regex(dateColumnName)));
    };

    const checkFilterDescription = (
      dateComponent: PluralDateComponent,
      operator: DateOperator = 'Previous'
    ) => {
      expect(
        getByText$(
          componentNode,
          new RegExp(`^${dateColumnName}.*${dateComponent}.*$`, 'i')
        ).textContent
      ).toMatchSnapshot(
        `filter description for ${operator} date operator by ${dateComponent}`
      );
    };

    const checkDateComponent = (
      prevDateComponentIndex: number,
      nextDateComponentIndex: number,
      operator: DateOperator = 'Previous',
      currentDateIncluded = false
    ) => {
      const prevDateComponent = pluralDateComponents[prevDateComponentIndex];
      const nextDateComponent = pluralDateComponents[nextDateComponentIndex];

      clickOnFilter();

      if (nextDateComponent !== prevDateComponent) {
        fireEvent.click(
          getByTextOn(getByTestId(mutatorPanelId), regex(prevDateComponent))
        );
        fireEvent.click(getByText(regex(nextDateComponent)));
      }

      // The current date inclusion text rendered properly
      currentDateIncluded &&
        operator === 'Previous' &&
        expect(getByText(regex('Include')).textContent).toMatchSnapshot(
          `Current date notation for ${operator} date operator by ${nextDateComponent}`
        );

      clickUpdateTheFilter();

      expect(getGeneratedQuery()).toMatchSnapshot(
        `${operator} date operator by ${nextDateComponent} ${
          currentDateIncluded
            ? ` including current ${nextDateComponent.substr(
                0,
                nextDateComponent.length - 1
              )}`
            : ''
        }`
      );
    };

    const checkAllBy = (
      nextOperator: DateOperator,
      prevOperator: DateOperator,
      includeCurrentDate: boolean = false
    ) => {
      if (nextOperator !== prevOperator) {
        clickOnFilter();
        const mutatorPanel = getByTestId(mutatorPanelId);
        fireEvent.click(getByTextOn(mutatorPanel, regex(prevOperator)));
        fireEvent.click(getByTextOn(mutatorPanel, regex(nextOperator)));

        if (includeCurrentDate) {
          enableCurrentDateInclusion();
          changeShiftAmount();
        }

        clickUpdateTheFilter();
      }

      for (let i = 0; i < pluralDateComponents.length; i++) {
        checkDateComponent(
          i - 1 < 0
            ? 2 // Default Days date component
            : i - 1,
          i,
          nextOperator,
          includeCurrentDate
        );
        includeCurrentDate &&
          checkFilterDescription(pluralDateComponents[i], nextOperator);
      }
    };

    const enableCurrentDateInclusion = () => {
      fireEvent.click(getByLabelText(regex('Include')));
    };

    const changeShiftAmount = () => {
      const shiftAmountTextField = getByDisplayValueOn(
        getByTestId(mutatorPanelId),
        '30'
      ) as HTMLInputElement;
      shiftAmountTextField.value = '10';
      fireEvent.input(shiftAmountTextField);
    };

    // Previous should be default one
    clickAddAFilter();
    fireEvent.click(getByText(regex(dateColumnName)));
    clickAddTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      'Previous operator by Days should be default one'
    );

    // Check all cases for Previous operator
    checkAllBy('Previous', 'Previous');
    // Check all cases for Next operator
    checkAllBy('Next', 'Previous');

    // Check all cases for Previous operator with current date enabled
    checkAllBy('Previous', 'Next', true);
    // Check all cases for Next operator with current date enabled
    checkAllBy('Next', 'Previous', true);
  });
});
