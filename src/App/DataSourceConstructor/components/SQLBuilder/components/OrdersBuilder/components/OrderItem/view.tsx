import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { RemoveButton } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/common/Icons/RemoveButton';
import { SequentialColumnView } from '../../../common/SequentialColumnView';
import { CheckedSelect } from '../../../FilterBuilder/components/MutateFilterPopover/SwitchMutator/CheckedSelect';
import { MutateOrderPopover } from '../MutateOrderPopover';
import { SortOrder, sortOrders } from './orders';
import { OrderItemViewProps } from './props';
import { orderItemStyles } from './styles';

export const OrderItem = withStyles(orderItemStyles)(
  class extends React.Component<OrderItemViewProps> {
    private readonly popoverLauncher: React.RefObject<HTMLDivElement>;

    constructor(props: OrderItemViewProps) {
      super(props);

      this.popoverLauncher = React.createRef<HTMLDivElement>();
    }

    public render() {
      const {
        order,
        updateOrder,
        classes,
        isOpen,
        handleOpen,
        handleClose,
        handleOrderRemoval,
        handleSortOrderChange
      } = this.props;

      const { id, column, sortOrder } = order;

      return (
        <>
          <div className={classes.root}>
            <div
              ref={this.popoverLauncher}
              onClick={handleOpen}
              className={classes['column-view']}
            >
              <SequentialColumnView {...column} />
            </div>
            <CheckedSelect<SortOrder>
              items={sortOrders}
              onSelect={handleSortOrderChange}
              selectedItem={sortOrder}
              hasBorder={false}
            />
            <RemoveButton onClick={handleOrderRemoval(id)} />
          </div>
          { isOpen && (
            <MutateOrderPopover
              isOpen={isOpen}
              anchorEl={this.popoverLauncher.current}
              action={updateOrder}
              onClose={handleClose}
              order={order}
            />
          ) }
        </>
      );
    }
  }
);
