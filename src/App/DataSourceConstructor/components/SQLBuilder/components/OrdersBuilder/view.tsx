import { Typography, withStyles } from '@material-ui/core';
import * as React from 'react';
import { AddOrder } from './components/AddOrder';
import { OrderItem } from './components/OrderItem';
import { OrdersBuilderViewProps } from './props';
import { ordersBuilderStyles } from './styles';

export const noColumnsAvailableText = 'No columns available for sorting';

export const OrdersBuilder = withStyles(ordersBuilderStyles)((({
  orders,
  aggregations,
  groupings,
  classes
}) => (
  <>
    {!(aggregations.length && !groupings.length) ? (
      <div className={classes.root}>
        {orders && orders.length ? (
          <div className={classes.orders}>
            {orders.map(order => (
              <OrderItem key={order.id} order={order} />
            ))}
          </div>
        ) : null}
        <AddOrder />
      </div>
    ) : (
      <Typography className={classes['no-column']}>
        {noColumnsAvailableText}
      </Typography>
    )}
  </>
)) as React.FC<OrdersBuilderViewProps>);
