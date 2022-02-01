import * as React from 'react';
import { getConfiguredRender } from 'src/components/query-builder/App/DataSourceConstructor/test-utils/configured-render';
import { rowLimits } from '../row-limits';
import { RowLimit } from '../RowLimit';
import { RowLimitBuilder } from '../view';

jest.mock('../RowLimit', () => ({
  RowLimit: jest.fn(() => null)
}));

const render = getConfiguredRender(
  <RowLimitBuilder rowLimit={2000} onRowLimitChange={jest.fn()} />
);

describe('RowLimitBuilderView', () => {
  it('should call RowLimit defined times', () => {
    render();

    expect(RowLimit as jest.Mock).toHaveBeenCalledTimes(rowLimits.length);
  });
});
