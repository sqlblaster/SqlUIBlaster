import { fireEvent, getByText as getByTextOn } from 'react-testing-library';
import { variableIconPlaceholder } from 'src/__tests__/utils/mock-placeholders';
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
import { foreignFieldPlaceholder } from 'src/process/startnew/ForeignField';
import { clickAddAFilter } from '../../../../../AddFilter/__tests__/utils/click-add-a-filter';
import {
  addFilterText,
  mutatorPanelId,
  updateFilterText
} from '../../../../view';
import { foreignFieldDataMock } from './utils/foreign-field-data.mock';
import { foreignFieldVariablesMock } from './utils/foreign-field-variables.mock';

jest.mock('src/utils');

jest.mock('react-apollo', () => {
  const {
    foreignFieldDataMock: dataMock
    // tslint:disable-next-line: no-require-imports
  } = require('./utils/foreign-field-data.mock');
  const {
    getConfiguredQuery,
    getResult
  // tslint:disable-next-line: no-require-imports
  } = require('src/__dynamic_mocks__/react-apollo.Query.mock');

  return {
    Query: getConfiguredQuery(() =>
      getResult({
        data: dataMock
      })
    )
  };
});

describe(`Foreign field operations`, () => {
  it(`should render proper sql query on:
      - an item selected
      - a variable selected after an item
      - an item selected after variable,
      should not allow save filter on empty selection`, async () => {
    const {
      getByText,
      getByTestId,
      getByPlaceholderText,
      rerender,
      componentNode
    } = render();

    const recordsMock = foreignFieldDataMock.navigation.search.records;

    const columns = selectATable();
    const foreignColumnName = columns[6].name;

    const clickOnFilter = () => {
      fireEvent.click(getByText(regex(foreignColumnName)));
    };

    const clickForeignColumn = () => {
      fireEvent.click(
        getByTextOn(getByTestId(mutatorPanelId), foreignColumnName)
      );
    };

    const checkFilterDescription = (snapName: string) => {
      expect(
        getByText$(componentNode, new RegExp(`^${foreignColumnName}.+$`, 'i'))
          .textContent
      ).toMatchSnapshot(`${snapName} filter description`);
    };

    // an item selected
    clickAddAFilter();
    clickForeignColumn();

    expect(getByText(addFilterText)).toBeDisabled();

    let input = getByPlaceholderText(foreignFieldPlaceholder);
    fireEvent.focus(input);
    fireChangeEvent(input, recordsMock[0].title);
    fireEvent.click(getByText(recordsMock[0].title));

    expect(getByText(addFilterText)).toBeEnabled();

    clickAddTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(`an item selected`);

    checkFilterDescription('an item selected');

    // a variable selected after an item
    rerender({ variables: foreignFieldVariablesMock });

    clickOnFilter();

    expect(getByText(updateFilterText)).toBeEnabled();

    fireEvent.click(getByText(variableIconPlaceholder));
    fireEvent.click(getByText(new RegExp(foreignFieldVariablesMock[0].name)));

    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      `a variable selected after an item`
    );

    checkFilterDescription('a variable selected after an item');

    // an item selected after variable
    clickOnFilter();

    expect(getByText(updateFilterText)).toBeEnabled();

    input = getByPlaceholderText(foreignFieldPlaceholder);
    fireEvent.focus(input);
    fireChangeEvent(input, recordsMock[1].title);
    fireEvent.click(getByText(recordsMock[1].title));

    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot(
      `an item selected after variable`
    );

    checkFilterDescription('an item selected after variable');
  });

  it.skip(`
      field with 'GraphNode' model should work the same way as foreign field and 'primary' field in the foreign table,
      'created_by', 'updated_by', 'ownerid' fields should have 'User' model and 'User' variables
      'uuid' field should provide all models data and has all Record Variables,
      'polymorph' field should have only certain models
      'polymorph' field should have certain variables list which corresponds to its models list
      'polyenum' field should have enums list
      'primary' type field should have 'key' icon
      'primary' type field in the foreign table should work the same way as selected table's 'primary' type field
  `, () => {
    // empty block
  });
});
