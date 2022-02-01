import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import { Order } from '../OrderItem/model';
import {
  MutateOrderPopoverOwnProps,
  MutateOrderPopoverProps,
  MutateOrderPopoverState,
  MutateOrderPopoverStateProps,
  MutateOrderPopoverViewProps as ViewProps
} from './props';
import { MutateOrderPopover as View } from './view';

export const MutateOrderPopover = connect<
  MutateOrderPopoverStateProps,
  {},
  MutateOrderPopoverOwnProps,
  State
>(({ groupings, orders }) => ({ groupings, orders }))(
  class extends React.Component<
    MutateOrderPopoverProps,
    MutateOrderPopoverState
  > {
    public state = { popoverPositionUpdater: undefined };

    public positionUpdaterCallback: ViewProps['positionUpdaterCallback'] = popoverPositionUpdater => {
      if (!this.state.popoverPositionUpdater) {
        this.setState({ popoverPositionUpdater });
      }
    }

    public handleColumnSelection: ViewProps['onColumnSelected'] = column => {
      const { action, order, onClose } = this.props;

      action(new Order(order ? order : {}, { column }));

      onClose();
    }

    public canShowColumnBranch: ViewProps['canShowColumnBranch'] = columnBranch => {
      const { orders, groupings } = this.props;

      return (
        !orders.find(({ column }) => column.equals(columnBranch)) &&
        ((!!groupings.length &&
          !!groupings.find(({ column }) => column.equals(columnBranch))) ||
          !groupings.length)
      );
    }

    public render() {
      return (
        <View
          {...this.props}
          popoverPositionUpdater={this.state.popoverPositionUpdater}
          positionUpdaterCallback={this.positionUpdaterCallback}
          onColumnSelected={this.handleColumnSelection}
          canShowColumnBranch={this.canShowColumnBranch}
        />
      );
    }
  }
);
