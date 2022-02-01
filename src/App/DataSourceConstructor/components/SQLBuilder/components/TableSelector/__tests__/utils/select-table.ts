import { fireEvent, getByText } from 'react-testing-library';
import { tablesMock } from 'src/App/DataSourceConstructor/redux/tables/tables.mock';
import {
  Column,
  Table
} from 'src/App/DataSourceConstructor/schemas';
import { regex } from 'src/App/DataSourceConstructor/test-utils/utils';
import { tablePickerPlaceholder } from '../../view';

export interface TableSelectorParams {
  tables?: Table[];
  selectedIndex?: number;
}

export const selectATable: (params?: TableSelectorParams) => Column[] = (
  params = {}
): Column[] => {
  const { tables = tablesMock, selectedIndex = 0 } = params;
  const table = tables[selectedIndex];
  // TODO: narrow the css selector search
  // const tableCmpNode = document.body.querySelector('')
  fireEvent.click(getByText(document.body, tablePickerPlaceholder));
  fireEvent.click(getByText(document.body, regex(`^${table.name}$`)));

  return table.columns;
};
