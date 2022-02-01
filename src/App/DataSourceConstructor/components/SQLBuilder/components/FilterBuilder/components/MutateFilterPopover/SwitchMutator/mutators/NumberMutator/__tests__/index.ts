import {
  fireEvent,
  getAllByDisplayValue as getAllByDisplayValueOn,
  getByDisplayValue as getByDisplayValueOn
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
  fireChangeEvent,
  getByText$,
  regex
} from 'src/App/DataSourceConstructor/test-utils/utils';
import { clickAddAFilter } from '../../../../../AddFilter/__tests__/utils/click-add-a-filter';
import { mutatorPanelId } from '../../../../view';
import { NumberOperator, numberOperators } from '../operators';

jest.mock('../SwitchNumberMutatorOperands/NumberOperands/NumberField');

describe(`Number operations`, () => {
  it(`should render proper sql query on all operators:
      - with default operand's value
      - with certain operand's value,
      should not allow non-number operands,
      should allow non-integer operands
  `, async () => {
    const { getByText, getByTestId, debug, componentNode } = render();

    const columns = selectATable();
    const columnName = columns[3].name;

    const clickOnFilter = () => {
      fireEvent.click(getByText(regex(columnName)));
    };

    const checkFilterDescription = (
      operator: NumberOperator,
      additionalDescription: string = ''
    ) => {
      expect(
        getByText$(componentNode, new RegExp(`^${columnName}.+$`, 'i'))
          .textContent
      ).toMatchSnapshot(
        `filter description for '${operator}' number operator${
          additionalDescription ? ` ${additionalDescription}` : ''
        }`
      );
    };

    const checkOperation = (
      nextOperator: NumberOperator,
      prevOperator?: NumberOperator,
      doBeforeSave?: () => void,
      additionalDescription: string = ''
    ) => {
      clickOnFilter();
      prevOperator &&
        fireEvent.click(getByText(new RegExp(`^${prevOperator}.*$`)));
      prevOperator &&
        fireEvent.click(getByText(new RegExp(`^.*${nextOperator}$`)));
      doBeforeSave && doBeforeSave();
      clickUpdateTheFilter();

      checkFilterDescription(nextOperator, additionalDescription);

      expect(getGeneratedQuery()).toMatchSnapshot(
        `'${nextOperator}' number operator${
          additionalDescription ? ` ${additionalDescription}` : ''
        }`
      );
    };

    // default number filter
    clickAddAFilter();
    fireEvent.click(getByText(regex(columnName)));
    clickAddTheFilter();

    checkFilterDescription('Equal to');

    expect(getGeneratedQuery()).toMatchSnapshot(`default number operator`);

    // Set certain operand's value
    clickOnFilter();
    fireChangeEvent(
      getByDisplayValueOn(getByTestId(mutatorPanelId), '0'),
      '123'
    );

    // should not allow non-number operands
    fireChangeEvent(
      getByDisplayValueOn(getByTestId(mutatorPanelId), '123'),
      'FTFR'
    );

    // should allow non-integer operands
    fireChangeEvent(
      getByDisplayValueOn(getByTestId(mutatorPanelId), '123'),
      '123.123'
    );

    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      `'Equal to' number operator with certain operand's value`
    );

    // Check all operators
    for (let i = 1; i < numberOperators.length; i++) {
      const nextOperator = numberOperators[i];
      const prevOperator = numberOperators[i - 1];
      checkOperation(nextOperator, prevOperator);
    }

    // Check `Between` operator with certain values
    const setBetweenOperands = (
      operandValue1?: string,
      operandValue2?: string
    ) => {
      const [operand1, operand2] = getAllByDisplayValueOn(
        getByTestId(mutatorPanelId),
        '0'
      );

      operandValue1 && fireChangeEvent(operand1, operandValue1);
      operandValue2 && fireChangeEvent(operand2, operandValue2);
    };

    const lastOperator: NumberOperator =
      numberOperators[numberOperators.length - 1];

    checkOperation(
      'Between',
      lastOperator,
      () => {
        setBetweenOperands(undefined, '5');
      },
      'with second operand set'
    );

    checkOperation(
      'Between',
      undefined,
      () => {
        setBetweenOperands('2', undefined);
      },
      'with both operands set'
    );
  });
});
