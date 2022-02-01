import { format } from 'pg-formatter';
import * as React from 'react';
import { getConfiguredRender } from 'src/App/DataSourceConstructor/test-utils/configured-render';
import { DataSourceConstructor } from '../../..';
import { DataSourceConstructorProps } from '../../../props';
import { tablesMock } from '../../../redux/tables/tables.mock';
import { DatabaseSchema } from '../../../schemas';
import { WithMuiThemeProvider } from '../../../test-utils/contexts-provider/with-MuiThemeProvider';

export const onQueryChange = jest.fn<
  void,
  Parameters<Required<DataSourceConstructorProps>['onQueryChange']>
>();

export const render = getConfiguredRender<DataSourceConstructorProps>(
  (
    <DataSourceConstructor
      databaseSchema={new DatabaseSchema({ tables: tablesMock })}
      onQueryChange={onQueryChange}
    />
  ),
  [WithMuiThemeProvider]
);

export const getGeneratedQuery = (): string => {
  const calls = onQueryChange.mock.calls;

  const generatedSqlQuery = calls[calls.length - 1][0];

  return format(generatedSqlQuery, {
    spaces: 2,
    keywordCase: 'uppercase',
    functionCase: 'lowercase'
  });
};
