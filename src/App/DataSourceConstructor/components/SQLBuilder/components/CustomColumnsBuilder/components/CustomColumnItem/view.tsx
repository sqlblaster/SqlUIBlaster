import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { RemoveButton } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/common/Icons/RemoveButton';
import { SequentialColumnView } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/common/SequentialColumnView';
import { CustomColumnMutator } from '../CustomColumnMutator';
import { CustomColumnItemViewProps } from './props';
import { customColumnItemStyles } from './styles';

export const CustomColumnItem = withStyles(customColumnItemStyles)(
  class extends React.Component<CustomColumnItemViewProps> {
    private readonly popoverLauncher: React.RefObject<HTMLDivElement>;

    constructor(props: CustomColumnItemViewProps) {
      super(props);

      this.popoverLauncher = React.createRef<HTMLDivElement>();
    }

    public render() {
      const {
        customColumn,
        updateCustomColumn,
        classes,
        isOpen,
        handleOpen,
        handleClose,
        handleCustomColumnRemoval
      } = this.props;

      const { id, column } = customColumn;

      return (
        <>
          <div className={classes.root}>
            <div
              ref={this.popoverLauncher}
              onClick={handleOpen}
              className={classes['customColumn-view']}
              data-testid='customColumn-view'
            >
              <SequentialColumnView {...column} />
            </div>
            <RemoveButton
              onClick={handleCustomColumnRemoval(id)}
              data-testid='remove'
            />
          </div>
          {isOpen && (
            <CustomColumnMutator
              isOpen={isOpen}
              anchorEl={this.popoverLauncher.current}
              action={updateCustomColumn}
              onClose={handleClose}
              customColumn={customColumn}
            />
          )}
        </>
      );
    }
  }
);
