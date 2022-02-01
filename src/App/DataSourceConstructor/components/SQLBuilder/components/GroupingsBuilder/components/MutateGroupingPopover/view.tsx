import * as React from 'react';
import { ColumnSelector } from '../../../common/ColumnSelector';
import { PopoverPaper } from '../../../common/PopoverPaper';
import { MutateGroupingPopoverViewProps } from './props';

export const MutateGroupingPopover: React.FC<
  MutateGroupingPopoverViewProps
> = props => {
  const {
    popoverPositionUpdater,
    onColumnSelected,
    canShowColumnBranch
  } = props;

  return (
    <PopoverPaper {...props}>
      <div className='mutate-grouping'>
        <ColumnSelector
          popoverPositionUpdater={popoverPositionUpdater}
          onColumnSelected={onColumnSelected}
          canShowColumnBranch={canShowColumnBranch}
        />
      </div>
    </PopoverPaper>
  );
};
