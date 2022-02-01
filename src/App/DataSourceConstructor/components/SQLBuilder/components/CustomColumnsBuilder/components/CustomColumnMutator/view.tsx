import * as React from 'react';
import { ColumnSelector } from '../../../common/ColumnSelector';
import { PopoverPaper } from '../../../common/PopoverPaper';
import { CustomColumnMutatorViewProps } from './props';

export const CustomColumnMutator: React.FC<
  CustomColumnMutatorViewProps
> = props => {
  const {
    popoverPositionUpdater,
    onCustomColumnSelected,
    canShowColumnBranch
  } = props;

  return (
    <PopoverPaper {...props}>
      <div className='mutate-customColumn'>
        <ColumnSelector
          popoverPositionUpdater={popoverPositionUpdater}
          onColumnSelected={onCustomColumnSelected}
          canShowColumnBranch={canShowColumnBranch}
        />
      </div>
    </PopoverPaper>
  );
};
