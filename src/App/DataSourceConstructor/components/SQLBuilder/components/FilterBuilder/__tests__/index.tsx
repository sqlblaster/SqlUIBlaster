import { fireEvent, getByText as getByTextOn } from 'react-testing-library';
import { backIconPlaceholder } from 'src/__tests__/utils/mock-placeholders';
import { regexWord } from 'src/components/query-builder/App/DataSourceConstructor/test-utils/utils';
import { getGeneratedQuery, render } from '../../../__tests__/render.utils';
import { selectAColumn } from '../../common/ColumnSelector/__tests__/utils/select-a-column';
import { selectATable } from '../../TableSelector/__tests__/utils/select-table';
import {
  clickAddAFilter,
  clickAddMoreFilter
} from '../components/AddFilter/__tests__/utils/click-add-a-filter';
import { addFilterPlaceholder } from '../components/AddFilter/view';
import { clickAddTheFilter, clickUpdateTheFilter } from './utils/filter-utils';

describe('Filters Builder', () => {
  it(`should be able to
        shows the add filter placeholder,
        add a filter,
        hide the add filter placeholder,
        update filter to the different filter type,
        add one more filter,
        hide logic operator before first operation,
        change logic operator's value,
        remove that filter`, () => {

    const { getByText, queryByText, queryAllByText, getAllByText } = render();

    const columns = selectATable();

    // shows the add filter placeholder
    expect(getByText(addFilterPlaceholder)).toBeInTheDocument();

    // add filter
    clickAddAFilter();
    selectAColumn(columns[3]);
    clickAddTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot();

    // hides logic operator before first operation
    expect(queryByText('and')).not.toBeInTheDocument();

    // hides the add filter placeholder
    expect(queryByText(addFilterPlaceholder)).not.toBeInTheDocument();

    // update filter to the different filter type
    fireEvent.click(getByText(/is equal to/i));
    fireEvent.click(getByText(backIconPlaceholder));
    selectAColumn(columns[2]);
    clickUpdateTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot();

    // add one more filter
    clickAddMoreFilter();
    selectAColumn(columns[1]);
    clickAddTheFilter();

    expect(getGeneratedQuery()).toMatchSnapshot();

    // still hides logic operator before first operation
    expect(queryAllByText(/and/i).length).toBe(1);

    // change logic operator's value
    fireEvent.click(getByText(regexWord('and')));
    fireEvent.click(getByText(regexWord('or')));

    expect(getGeneratedQuery()).toMatchSnapshot();

    // remove filter
    fireEvent.click(getAllByText(/clear/i)[0]);

    expect(getGeneratedQuery()).toMatchSnapshot();
  });
});
