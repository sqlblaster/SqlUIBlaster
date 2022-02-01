import { fireEvent, getByText } from 'react-testing-library';
import { regex } from 'src/App/DataSourceConstructor/test-utils/utils';
import { filtersBuilderLabel } from '../../../../../../labels';
import { addFilterPlaceholder } from '../../view';

export const clickAddAFilter = () => {
  fireEvent.click(getByText(document.body, regex(addFilterPlaceholder)));
};

export const clickAddMoreFilter = () => {
  const filtersBuilderPanel = getByText(
    document.body,
    regex(filtersBuilderLabel)
  );
  fireEvent.click(getByText(filtersBuilderPanel, 'AddIcon'));
};
