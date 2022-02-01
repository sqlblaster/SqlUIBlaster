import { StyleRulesCallback } from '@material-ui/core';

export type QueryBuilderClassKeys = 'root';

export const queryBuilderStyles: StyleRulesCallback<
  QueryBuilderClassKeys
> = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
});
