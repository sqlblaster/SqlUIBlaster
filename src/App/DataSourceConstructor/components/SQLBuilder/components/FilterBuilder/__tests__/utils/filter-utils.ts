import { fireEvent, getByText } from 'react-testing-library';
import { addFilterText, updateFilterText } from '../../components/MutateFilterPopover/view';

export const clickAddTheFilter = () => {
  fireEvent.click(getByText(document.body, addFilterText));
};

export const clickUpdateTheFilter = () => {
  fireEvent.click(getByText(document.body, updateFilterText));
};
