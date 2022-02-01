import * as React from 'react';
import { AddEntity } from '../../../common/AddEntity';
import { MutateOrderPopover } from '../MutateOrderPopover';
import { AddOrderViewProps } from './props';

export const addOrderText = 'Pick a field to sort by';

// FIXME: make padding clickable too
export class AddOrder extends React.Component<AddOrderViewProps, any> {
  private readonly popoverLauncher: React.RefObject<HTMLDivElement>;

  constructor(props: AddOrderViewProps) {
    super(props);

    this.popoverLauncher = React.createRef<HTMLDivElement>();
  }

  public render() {
    const {
      orders,
      addOrder,
      isOpen,
      handleClose,
      handleOpen
    } = this.props;

    return (
      <>
        <AddEntity
          onClick={handleOpen}
          reference={this.popoverLauncher}
          showText={!(orders && orders.length)}
        >
          {addOrderText}
        </AddEntity>
        { isOpen && (// TODO: resolve this problem another way
          <MutateOrderPopover
            action={addOrder}
            isOpen={isOpen}
            anchorEl={this.popoverLauncher.current}
            onClose={handleClose}
          />
        ) }
      </>
    );
  }
}
