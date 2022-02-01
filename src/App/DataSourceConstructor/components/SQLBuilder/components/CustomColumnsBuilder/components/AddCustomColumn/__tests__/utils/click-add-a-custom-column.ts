import { fireEvent, getByText } from 'react-testing-library';
import { regex } from 'src/App/DataSourceConstructor/test-utils/utils';
import { customColumnsBuilderLabel } from '../../../../../../labels';
import { addCustomColumnPlaceholder } from '../../view';

export const clickAddACustomColumn = () => {
  fireEvent.click(getByText(document.body, regex(addCustomColumnPlaceholder)));
};

export const clickAddMoreCustomColumn = () => {
  const customColumnsBuilderPanel = getByText(
    document.body,
    regex(customColumnsBuilderLabel)
  );
  fireEvent.click(getByText(customColumnsBuilderPanel, 'AddIcon'));
};
