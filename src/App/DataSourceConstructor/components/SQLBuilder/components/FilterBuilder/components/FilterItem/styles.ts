import { StyleRulesCallback } from '@material-ui/core';

export type FilterItemClassKeys = 'root' | 'operation' | 'open' | 'expression';

export const filterItemStyles: StyleRulesCallback<
  FilterItemClassKeys
> = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 2,
    borderRadius: '3px',
    transition: '0.3s',
  },
  operation: {
    display: 'flex',
    flexWrap: 'wrap',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      opacity: 0.8
    }
  },
  open: {},
  expression: {
    display: 'flex',
    alignItems: 'center'
  }
});
