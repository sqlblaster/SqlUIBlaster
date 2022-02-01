import { StyleRulesCallback } from '@material-ui/core';

export type GroupingItemClassKeys = 'root' | 'column-view';

export const groupingItemStyles: StyleRulesCallback<
  GroupingItemClassKeys
> = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 2,
    borderRadius: '3px',
    transition: '0.3s',
    margin: '5px 0px'
  },
  'column-view': {
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8
    },
    transition: '0.3s'
  }
});
