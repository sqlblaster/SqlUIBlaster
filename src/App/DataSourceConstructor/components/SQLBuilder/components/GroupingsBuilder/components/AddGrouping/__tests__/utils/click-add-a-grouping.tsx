import { fireEvent, getByText } from 'react-testing-library';
import { groupingsBuilderLabel } from '../../../../../../labels';
import { addGroupingText } from '../../view';

export const clickAddAGrouping = () => {
  fireEvent.click(getByText(document.body, addGroupingText));
};

export const clickAddMoreGrouping = () => {
  fireEvent.click(getByText(getGroupingsBuilderPanel(), 'AddIcon'));
};

export const getGroupingsBuilderPanel = () => {
  return getByText(document.body, groupingsBuilderLabel);
};
