import { fireEvent, getByText as getByTextOn } from 'react-testing-library';
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
import { DateOperator, dateOperators } from '../../../../operators';

describe(`'Is empty' and 'Is not empty' date operations`, () => {
  it(`should render proper sql query,
      should check the proper filter description render
  `, async () => {
    const { getByText, getByTestId, componentNode } = render();

    const columns = selectATable();
    const dateColumnName = columns[2].name;

    const checkFilterDescription = (operator: DateOperator) => {
      expect(
        getByText$(
          componentNode,
          new RegExp(`^${dateColumnName}.*empty.*$`, 'i')
        ).textContent
      ).toMatchSnapshot(`filter description for '${operator}' date operator`);
    };

    clickAddAFilter();
    fireEvent.click(getByText(regex(dateColumnName)));
    fireEvent.click(getByText(regex(dateOperators[0])));
    fireEvent.click(getByText(regex(dateOperators[6])));
    clickAddTheFilter();

    checkFilterDescription('Is empty');

    expect(getGeneratedQuery()).toMatchSnapshot(`'Is empty' operator`);

    fireEvent.click(getByText(regex(dateColumnName)));
    fireEvent.click(
      getByTextOn(getByTestId(mutatorPanelId), regex(dateOperators[6]))
    );
    fireEvent.click(getByText(regex(dateOperators[7])));
    clickUpdateTheFilter();

    checkFilterDescription('Is not empty');

    expect(getGeneratedQuery()).toMatchSnapshot(`'Is not empty' operator`);
  });
});
