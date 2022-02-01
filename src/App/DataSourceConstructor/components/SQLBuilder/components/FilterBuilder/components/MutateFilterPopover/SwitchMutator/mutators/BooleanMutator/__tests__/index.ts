import {
  fireEvent,
  getAllByDisplayValue as getAllByDisplayValueOn,
  getByDisplayValue as getByDisplayValueOn
} from 'react-testing-library';
import {
  getGeneratedQuery,
  render
} from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/__tests__/render.utils';
import {
  clickAddTheFilter,
  clickUpdateTheFilter
} from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/__tests__/utils/filter-utils';
import { selectATable } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/TableSelector/__tests__/utils/select-table';
import {
  getByText$,
  regex
} from 'src/components/query-builder/App/DataSourceConstructor/test-utils/utils';
import { clickAddAFilter } from '../../../../../AddFilter/__tests__/utils/click-add-a-filter';
import { mutatorPanelId } from '../../../../view';
import { BooleanOperator, booleanOperators } from '../operators';

describe(`boolean operations`, () => {
  it(`should render proper sql query on all operators:
      - with default operand's value
      - with certain operand's value,
      should not allow non-boolean operands,
      should allow non-integer operands
  `, async () => {
    const { getByText, getByTestId, debug, componentNode } = render();

    const columns = selectATable();
    const columnName = columns[4].name;

    const clickOnFilter = () => {
      fireEvent.click(getByText(regex(columnName)));
    };

    const checkFilterDescription = (operator: BooleanOperator) => {
      expect(
        getByText$(componentNode, new RegExp(`^${columnName}.+$`, 'i'))
          .textContent
      ).toMatchSnapshot(
        `filter description for '${operator}' boolean operator`
      );
    };

    const checkOperation = (
      nextOperator: BooleanOperator,
      prevOperator?: BooleanOperator
    ) => {
      clickOnFilter();
      prevOperator &&
        fireEvent.click(getByText(new RegExp(`^${prevOperator}.*$`)));
      prevOperator &&
        fireEvent.click(getByText(new RegExp(`^.*${nextOperator}$`)));
      clickUpdateTheFilter();

      checkFilterDescription(nextOperator);

      expect(getGeneratedQuery()).toMatchSnapshot(
        `'${nextOperator}' boolean operator`
      );
    };

    // default boolean filter
    clickAddAFilter();
    fireEvent.click(getByText(regex(columnName)));
    clickAddTheFilter();

    checkFilterDescription('Is true');

    expect(getGeneratedQuery()).toMatchSnapshot(`default boolean operator`);

    // Check all operators
    for (let i = 1; i < booleanOperators.length; i++) {
      const nextOperator = booleanOperators[i];
      const prevOperator = booleanOperators[i - 1];
      checkOperation(nextOperator, prevOperator);
    }
  });
});
