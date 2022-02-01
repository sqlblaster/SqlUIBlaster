import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import { WithPopoverManagement } from '../../../common/WithPopoverManagement';
import { Order } from './model';
import {
  OIMapDispatchToProps,
  OrderItemDispatchProps,
  OrderItemOwnProps,
  OrderItemProps,
  OrderItemViewProps as ViewProps
} from './props';
import { OrderItem as View } from './view';

export const OrderItem = connect<
  {},
  OrderItemDispatchProps,
  OrderItemOwnProps,
  State
>(
  null,
  OIMapDispatchToProps
)(
  class extends React.Component<OrderItemProps> {
    public static ViewWithPopoverManagement = WithPopoverManagement(View);

    public handleOrderRemoval: ViewProps['handleOrderRemoval'] = (id) => () =>
      this.props.removeOrder(id)

    public handleSortOrderChange: ViewProps['handleSortOrderChange'] = (sortOrder) => {
      const { updateOrder, order } = this.props;
      updateOrder(
        new Order(order, {
          sortOrder
        })
      );
    }

    public render() {
      return (
        <OrderItem.ViewWithPopoverManagement
          handleOrderRemoval={this.handleOrderRemoval}
          handleSortOrderChange={this.handleSortOrderChange}
          {...this.props}
        />
      );
    }
  }
);
