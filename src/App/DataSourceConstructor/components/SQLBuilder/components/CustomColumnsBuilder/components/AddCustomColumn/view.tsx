import * as React from 'react';
import { AddEntity } from '../../../common/AddEntity';
import { CustomColumnMutator } from '../CustomColumnMutator';
import { AddCustomColumnViewProps } from './props';

export const addCustomColumnPlaceholder = 'Add a column';

// FIXME: make padding clickable too
export class AddCustomColumn extends React.Component<AddCustomColumnViewProps> {
  private readonly popoverLauncher: React.RefObject<HTMLDivElement>;

  constructor(props: AddCustomColumnViewProps) {
    super(props);

    this.popoverLauncher = React.createRef<HTMLDivElement>();
  }

  public render() {
    const {
      customColumns,
      addCustomColumn,
      isOpen,
      handleClose,
      handleOpen
    } = this.props;

    return (
      <>
        <AddEntity
          showText={!(customColumns && customColumns.length)}
          onClick={handleOpen}
          reference={this.popoverLauncher}
        >
          {addCustomColumnPlaceholder}
        </AddEntity>
        { isOpen && (// TODO: resolve this problem another way
          <CustomColumnMutator
            action={addCustomColumn}
            isOpen={isOpen}
            anchorEl={this.popoverLauncher.current}
            onClose={handleClose}
          />
        ) }
      </>
    );
  }
}
