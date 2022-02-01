import { Popover } from '@material-ui/core';
import { PopoverProps } from '@material-ui/core/Popover';
import * as React from 'react';

export interface PopoverPaperProps {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  positionUpdaterCallback?: (positionUpdater: () => void) => void;
  onClose: (event?: Parameters<Required<PopoverProps>['onClose']>[0]) => void;
}

export class PopoverPaper extends React.Component<PopoverPaperProps> {
  public handlePopoverAction: PopoverProps['action'] = action => {
    const { positionUpdaterCallback } = this.props;

    positionUpdaterCallback && positionUpdaterCallback(action.updatePosition);
  }

  public render() {
    const { isOpen = false, anchorEl, onClose, children } = this.props;

    return (
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        action={this.handlePopoverAction}
      >
        {children}
      </Popover>
    );
  }
}
