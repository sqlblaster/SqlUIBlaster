import * as React from 'react';
import { ColumnSelector } from '../../../common/ColumnSelector';
import { PopoverPaper } from '../../../common/PopoverPaper';
import { MutateOrderPopoverViewProps } from './props';

export const MutateOrderPopover: React.FC<
  MutateOrderPopoverViewProps
> = props => {
  const {
    popoverPositionUpdater,
    onColumnSelected,
    canShowColumnBranch
  } = props;

  return (
    <PopoverPaper {...props}>
      <div className='mutate-order'>
        <ColumnSelector
          popoverPositionUpdater={popoverPositionUpdater}
          onColumnSelected={onColumnSelected}
          canShowColumnBranch={canShowColumnBranch}
        />
      </div>
    </PopoverPaper>
  );
};
