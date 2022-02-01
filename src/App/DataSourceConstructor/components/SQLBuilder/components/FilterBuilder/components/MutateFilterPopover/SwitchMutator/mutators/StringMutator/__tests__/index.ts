import {
  fireEvent,
  getAllByText as getAllByTextOn,
  getByDisplayValue as getByDisplayValueOn,
  getByText as getByTextOn,
  wait
} from 'react-testing-library';
import {
  expandMoreIconPlaceholder,
  shareIconPlaceholder,
  variableIconPlaceholder
} from 'src/__tests__/utils/mock-placeholders';
import {
  getGeneratedQuery,
  render
} from 'src/App/DataSourceConstructor/components/SQLBuilder/__tests__/render.utils';
import {
  clickAddTheFilter,
  clickUpdateTheFilter
} from 'src/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/__tests__/utils/filter-utils';
import { selectATable } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/TableSelector/__tests__/utils/select-table';
import { tablesMock } from 'src/App/DataSourceConstructor/redux/tables/tables.mock';
import {
  getAllByText$,
  getByText$,
  regex
} from 'src/App/DataSourceConstructor/test-utils/utils';
import { clickAddAFilter } from '../../../../../AddFilter/__tests__/utils/click-add-a-filter';
import { addFilterText, mutatorPanelId } from '../../../../view';
import { StringOperator, stringOperators } from '../operators';
import { caseSensitivityText, stringMutatorPlaceholder } from '../view';
import { enumVariableMock } from './utils/enum-variables-mock';

describe(`String operations`, () => {
  it(`should render proper sql query for:
      - primary fields,
      - enum fields,
      - case insensitive cases,
      should check the proper filter description render,
      should check the variable pick and from variable to enum pick
  `, async () => {
    const {
      rerender,
      getByText,
      queryByText,
      getByTestId,
      getByLabelText,
      getByPlaceholderText,
      componentNode,
      debug
    } = render();

    const columns = selectATable();
    const foreignColumnName = columns[5].name;
    const innerField = tablesMock[2].columns[1].name;

    let clickOnFilter = () => {
      fireEvent.click(getByText(regex(innerField)));
    };

    const checkFilterDescription = (operator: StringOperator) => {
      expect(
        getByText$(
          componentNode,
          new RegExp(`^${foreignColumnName}.*${innerField}.+$`, 'i')
        ).textContent
      ).toMatchSnapshot(`filter description for '${operator}' date operator`);
    };

    const checkOperation = (
      nextOperator: StringOperator,
      prevOperator: StringOperator,
      caseSensitive: boolean = false,
      doBeforeSave: () => void = () => null
    ) => {
      clickOnFilter();
      fireEvent.click(getByText(new RegExp(`^${prevOperator}.*$`)));
      fireEvent.click(getByText(new RegExp(`^.*${nextOperator}$`)));
      doBeforeSave();
      clickUpdateTheFilter();

      checkFilterDescription(nextOperator);

      expect(getGeneratedQuery()).toMatchSnapshot(
        `${
          caseSensitive ? 'case sensitive ' : ''
        }'${nextOperator}' string operator`
      );
    };

    // default string filter
    clickAddAFilter();
    fireEvent.click(
      getByTextOn(
        getByText$(
          componentNode,
          regex(`${shareIconPlaceholder}.*${foreignColumnName}.*`)
        ),
        regex(expandMoreIconPlaceholder)
      )
    );
    fireEvent.click(getByText(regex(innerField)));

    const textField = getByPlaceholderText(
      regex(stringMutatorPlaceholder)
    ) as HTMLInputElement;
    textField.defaultValue = 'Candy';
    fireEvent.input(textField);
    clickAddTheFilter();

    checkFilterDescription('Is');

    expect(getGeneratedQuery()).toMatchSnapshot(`default string operator`);

    // Check all operators
    for (let i = 1; i < stringOperators.length; i++) {
      const nextOperator = stringOperators[i];
      const prevOperator = stringOperators[i - 1];
      checkOperation(nextOperator, prevOperator);
    }

    // Check case sensitive operators
    const caseSensitiveOperators = stringOperators.slice(2, 6);
    for (let i = 0; i < caseSensitiveOperators.length; i++) {
      const prevOperator: StringOperator =
        i === 0 ? 'Is not empty' : caseSensitiveOperators[i - 1];
      const nextOperator = caseSensitiveOperators[i];
      checkOperation(
        nextOperator,
        prevOperator,
        true,
        i !== 0
          ? () => null
          : () => {
              fireEvent.click(getByLabelText(caseSensitivityText));
            }
      );
    }

    // Check enum string operation
    const columnName = columns[1].name;
    clickOnFilter = () => {
      fireEvent.click(getByText(columnName));
    };
    const enums = columns[1].enums as string[];
    fireEvent.click(getByText(/clear/i));
    clickAddAFilter();
    fireEvent.click(getByText(regex(columnName)));
    clickAddTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(`Enum string operation`);

    clickOnFilter();
    fireEvent.click(getByTextOn(getByTestId(mutatorPanelId), enums[0]));
    fireEvent.click(getByTextOn(document.body, enums[1]));
    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      `Enum string operation with second enum's value`
    );

    // Check the variable pick
    const validVariable = enumVariableMock[1].name;
    rerender({ variables: enumVariableMock });
    clickOnFilter();
    fireEvent.click(getByText(variableIconPlaceholder));

    // The rest of variable filtered properly
    expect(queryByText(enumVariableMock[0].name)).toBeNull();
    expect(queryByText(enumVariableMock[2].name)).toBeNull();

    fireEvent.click(getByText(validVariable));

    expect(getByText(validVariable).textContent).toMatchSnapshot(
      'valid variable is selected'
    );

    clickUpdateTheFilter();

    expect(
      getByText$(
        componentNode,
        regex(`${columnName}.*${stringOperators[0]}.*${validVariable}$`)
      ).textContent
    ).toMatchSnapshot('valid variable is drawn correctly');

    expect(getGeneratedQuery()).toMatchSnapshot(
      `Variable picked after the enum value pick`
    );

    // Check picking enum value after variable pick
    clickOnFilter();
    fireEvent.click(
      getByTextOn(getByTestId(mutatorPanelId), regex(validVariable))
    );
    fireEvent.click(getByTextOn(document.body, enums[1]));
    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      `Enum value picked after variable pick`
    );
  });
});
