import * as React from 'react';
import { AddEntity } from '../../../common/AddEntity';
import { MutateFilterPopover } from '../MutateFilterPopover';
import { AddFilterViewProps } from './props';

export const addFilterPlaceholder = 'Add filters to narrow your answer';

// FIXME: make padding clickable too
export class AddFilter extends React.Component<AddFilterViewProps, any> {
  private readonly popoverLauncher: React.RefObject<HTMLDivElement>;

  constructor(props: AddFilterViewProps) {
    super(props);

    this.popoverLauncher = React.createRef<HTMLDivElement>();
  }

  public render() {
    const { filters, addFilter, isOpen, handleClose, handleOpen } = this.props;

    return (
      <>
        <AddEntity
          showText={!(filters && filters.length)}
          onClick={handleOpen}
          reference={this.popoverLauncher}
        >
          {addFilterPlaceholder}
        </AddEntity>
        { isOpen && (// TODO: resolve this problem another way
          <MutateFilterPopover
            action={addFilter}
            isOpen={isOpen}
            anchorEl={this.popoverLauncher.current}
            onClose={handleClose}
          />
        ) }
      </>
    );
  }
}
