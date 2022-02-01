import { StyleRulesCallback } from '@material-ui/core';

export type FilterBuilderClassKeys = 'root' | 'filters';

export const filterBuilderStyles: StyleRulesCallback<
  FilterBuilderClassKeys
> = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  filters: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  }
});
