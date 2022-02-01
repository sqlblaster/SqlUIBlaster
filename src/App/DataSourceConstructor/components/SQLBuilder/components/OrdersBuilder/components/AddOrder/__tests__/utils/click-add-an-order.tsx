import { fireEvent, getByText } from 'react-testing-library';
import { ordersBuilderLabel } from '../../../../../../labels';
import { addOrderText } from '../../view';

export const clickAddAnOrder = () => {
  fireEvent.click(getByText(document.body, addOrderText));
};

export const clickAddMoreOrder = () => {
  fireEvent.click(getByText(getOrdersBuilderPanel(), 'AddIcon'));
};

export const getOrdersBuilderPanel = () => {
  return getByText(document.body, ordersBuilderLabel);
};
