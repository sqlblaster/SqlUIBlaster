import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { RemoveButton } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/common/Icons/RemoveButton';
import { SequentialColumnView } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/common/SequentialColumnView';
import { MutateGroupingPopover } from '../MutateGroupingPopover';
import { GroupingItemViewProps } from './props';
import { groupingItemStyles } from './styles';

export const GroupingItem = withStyles(groupingItemStyles)(
  class extends React.Component<GroupingItemViewProps> {
    private readonly popoverLauncher: React.RefObject<HTMLDivElement>;

    constructor(props: GroupingItemViewProps) {
      super(props);

      this.popoverLauncher = React.createRef<HTMLDivElement>();
    }

    public render() {
      const {
        grouping,
        updateGrouping,
        classes,
        isOpen,
        handleOpen,
        handleClose,
        handleGroupingRemoval
      } = this.props;

      const { id, column } = grouping;

      return (
        <>
          <div className={classes.root}>
            <div
              ref={this.popoverLauncher}
              onClick={handleOpen}
              className={classes['column-view']}
              data-testid='column-view'
            >
              <SequentialColumnView {...column} />
            </div>
            <RemoveButton
              onClick={handleGroupingRemoval(id)}
              data-testid='remove'
            />
          </div>
          { isOpen && (
            <MutateGroupingPopover
              isOpen={isOpen}
              anchorEl={this.popoverLauncher.current}
              action={updateGrouping}
              onClose={handleClose}
              grouping={grouping}
            />
          ) }
        </>
      );
    }
  }
);
