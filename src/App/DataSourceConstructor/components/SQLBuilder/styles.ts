import { StyleRulesCallback } from '@material-ui/core';

export type SQLBuilderClassKeys = 'root';

export const sqlBuilderStyles: StyleRulesCallback<
  SQLBuilderClassKeys
> = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    background: '#fff',
    width: '100%',
  }
});
