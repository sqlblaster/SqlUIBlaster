import * as casual from 'casual';
import * as React from 'react';
import { getConfiguredRender } from 'src/App/DataSourceConstructor/test-utils/configured-render';
import { defaultRowLimitValue } from '../redux/reducer';
import { RowLimit, RowLimitProps } from '../RowLimit';

const onRowLimitChange = jest.fn();
const render = getConfiguredRender<RowLimitProps>(
  <RowLimit
    rowLimit={defaultRowLimitValue}
    selectedRowLimit={defaultRowLimitValue}
    onRowLimitChange={onRowLimitChange}
  />
);

describe('RowLimit', () => {
  it('should call onRowLimitChange prop on click event', () => {
    const { componentNode } = render();

    componentNode.click();

    expect(onRowLimitChange).toHaveBeenCalledWith(defaultRowLimitValue);
  });

  it('should be selected if selectedRowLimit is equal to rowLimit and vice versa', () => {
    const { componentNode, rerender } = render();

    expect(componentNode.className).toMatch(/selected/i);

    rerender({ selectedRowLimit: casual.integer() });

    expect(componentNode.className).not.toMatch('selected');
  });

  it('should show None label if rowLimit is equal to default one', () => {
    const { componentNode } = render();

    expect(componentNode).toHaveTextContent(/2000/);
  });
});
