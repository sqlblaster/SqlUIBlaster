import { StyleRulesCallback } from '@material-ui/core';

export type OrdersBuilderClassKeys = 'root' | 'orders' | 'no-column';

export const ordersBuilderStyles: StyleRulesCallback<
  OrdersBuilderClassKeys
> = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  orders: {
    display: 'flex',
    flexDirection: 'column'
  },
  'no-column': {
    padding: '10px 5px',
    color: theme.palette.grey.A700
  }
});
