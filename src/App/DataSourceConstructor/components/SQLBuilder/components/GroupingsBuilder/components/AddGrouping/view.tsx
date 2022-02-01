import * as React from 'react';
import { AddEntity } from '../../../common/AddEntity';
import { MutateGroupingPopover } from '../MutateGroupingPopover';
import { AddGroupingViewProps } from './props';

export const addGroupingText = 'Add a grouping';

// FIXME: make padding clickable too
export class AddGrouping extends React.Component<AddGroupingViewProps> {
  private readonly popoverLauncher: React.RefObject<HTMLDivElement>;

  constructor(props: AddGroupingViewProps) {
    super(props);

    this.popoverLauncher = React.createRef<HTMLDivElement>();
  }

  public render() {
    const {
      groupings,
      addGrouping,
      isOpen,
      handleClose,
      handleOpen
    } = this.props;

    return (
      <>
        <AddEntity
          showText={!(groupings && groupings.length)}
          onClick={handleOpen}
          reference={this.popoverLauncher}
        >
          {addGroupingText}
        </AddEntity>
        {isOpen && (// TODO: resolve this problem another way
          <MutateGroupingPopover
            action={addGrouping}
            isOpen={isOpen}
            anchorEl={this.popoverLauncher.current}
            onClose={handleClose}
          />
        )}
      </>
    );
  }
}
