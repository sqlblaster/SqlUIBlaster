import { StyleRulesCallback } from '@material-ui/core';

export type OrderItemClassKeys = 'root' | 'column-view';

export const orderItemStyles: StyleRulesCallback<
  OrderItemClassKeys
> = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    transition: '0.3s',
  },
  'column-view': {
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8
    },
    transition: '0.3s'
  }
});
