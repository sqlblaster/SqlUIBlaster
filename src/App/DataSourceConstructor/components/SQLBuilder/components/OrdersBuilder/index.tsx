import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import { OrdersBuilderStateProps } from './props';
import { OrdersBuilder as View } from './view';

export const OrdersBuilder = connect<
  OrdersBuilderStateProps,
  {},
  {},
  State
>(({ orders, aggregations, groupings }) => ({
  orders,
  aggregations,
  groupings
}))(View);
