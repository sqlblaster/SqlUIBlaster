import { StyleRulesCallback } from '@material-ui/core';

export type TableColumnsClassKeys = 'root' | 'noColumns';

export const tableColumnsStyles: StyleRulesCallback<
  TableColumnsClassKeys
> = (theme) => ({
  root: {},
  noColumns: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px'
  }
});
