import { StyleRulesCallback } from '@material-ui/core';

export type RowLimitClassKeys = 'root' | 'selected';

export const rowLimitStyles: StyleRulesCallback<
  RowLimitClassKeys
> = (theme) => ({
  root: {
    cursor: 'pointer',
    border: '1px solid #d9dcdf',
    padding: '7px 12px',
    fontSize: '10px',
    fontWeight: 'bold',
    transition: '0.3s',
    marginLeft: '-1px',
    color: '#7c8791',
    background: '#f9fbfc',
    '&:hover': {
      opacity: 0.7
    }
  },
  selected: {
    color: theme.palette.primary.dark,
    background: '#eef2f5'
  }
});
