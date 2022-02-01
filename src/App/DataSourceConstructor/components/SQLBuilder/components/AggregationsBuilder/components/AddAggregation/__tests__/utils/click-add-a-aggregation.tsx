import { fireEvent, getByText } from 'react-testing-library';
import { aggregationsBuilderLabel } from '../../../../../../labels';
import { addAggregationText } from '../../view';

export const clickAddAAggregation = () => {
  fireEvent.click(getByText(document.body, addAggregationText));
};

export const clickAddMoreAggregation = () => {
  fireEvent.click(getByText(getAggregationsBuilderPanel(), 'AddIcon'));
};

export const getAggregationsBuilderPanel = () => {
  return getByText(document.body, aggregationsBuilderLabel);
};
