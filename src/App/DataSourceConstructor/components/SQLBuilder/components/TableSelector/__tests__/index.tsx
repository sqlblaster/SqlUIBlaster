import { getGeneratedQuery, render } from '../../../__tests__/render.utils';
import { selectATable } from '../../TableSelector/__tests__/utils/select-table';
import { tablePickerPlaceholder } from '../view';

describe('TableSelector', () => {
  const { componentNode } = render();

  it('should show placeholder by default', () => {
    expect(componentNode).toHaveTextContent(new RegExp(tablePickerPlaceholder));
  });

  it('should change the selected table when one is picked', async () => {
    selectATable();

    expect(getGeneratedQuery()).toMatchSnapshot();
  });

  it.skip('should clear all query entities including drill-down entities', () => {});
});
