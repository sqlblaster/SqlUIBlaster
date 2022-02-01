import * as casual from 'casual';
import * as React from 'react';
import { getConfiguredRender } from 'src/App/DataSourceConstructor/test-utils/configured-render';
import { WithReduxProvider } from 'src/App/DataSourceConstructor/test-utils/contexts-provider/with-ReduxProvider';
import { getCertainCalledProps } from 'src/App/DataSourceConstructor/test-utils/react-utils';
import { getStore } from 'src/App/DataSourceConstructor/test-utils/store/getStore';
import { RowLimitBuilder } from '..';
import { RowLimitBuilderViewProps } from '../props';
import { RowLimitBuilder as View } from '../view';

jest.mock('../view', () => ({
  RowLimitBuilder: jest.fn(() => null)
}));

const store = getStore();

const render = getConfiguredRender(<RowLimitBuilder />, [
  WithReduxProvider(store)
]);

describe('RowLimitBuilder', () => {
  it('should call setRowLimit action creator when onRowLimitChange called', () => {
    const rowLimit = casual.integer();

    render();

    const { onRowLimitChange } = getCertainCalledProps<
      RowLimitBuilderViewProps
    >(View as jest.Mock, ['onRowLimitChange']);

    onRowLimitChange(rowLimit)();

    expect(store.getState().rowLimit).toBe(rowLimit);
  });
});
