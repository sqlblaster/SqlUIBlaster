import { Button, withStyles } from '@material-ui/core';
import * as React from 'react';
import { ColumnSelector } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/common/ColumnSelector';
import { BackButton } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/common/Icons/BackButton';
import { PopoverPaper } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/common/PopoverPaper';
import { SequentialColumnView } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/common/SequentialColumnView';
import { MutateFilterPopoverViewProps } from './props';
import { mutateFilterPopoverStyles } from './styles';
import { SwitchMutator } from './SwitchMutator';

export const updateFilterText = 'Update filter';
export const addFilterText = 'Add filter';
export const mutatorPanelId = 'mutate-filter';

export const MutateFilterPopover = withStyles(mutateFilterPopoverStyles)(
  (props => {
    const {
      column,
      filter,
      canSaveFilter,
      classes,
      popoverPositionUpdater,
      handleColumnSelection,
      handleBackClick,
      handleMutateButtonClick
    } = props;

    return (
      <PopoverPaper {...props}>
        <div className={classes['mutate-filter']} data-testid={mutatorPanelId}>
          {!column && (
            <ColumnSelector
              popoverPositionUpdater={popoverPositionUpdater}
              onColumnSelected={handleColumnSelection}
            />
          )}
          {column && (
            <SwitchMutator
              type={column.lastColumn.type}
              column={column.lastColumn}
              titleComponent={
                <div className={classes['title-component']}>
                  <BackButton onClick={handleBackClick} />
                  <SequentialColumnView {...column} />
                </div>
              }
              submitMutationComponent={
                <Button
                  disabled={!canSaveFilter}
                  variant='contained'
                  size='small'
                  color='primary'
                  onClick={handleMutateButtonClick}
                >
                  {filter && filter.id ? updateFilterText : addFilterText}
                </Button>
              }
            />
          )}
        </div>
      </PopoverPaper>
    );
  }) as React.FC<MutateFilterPopoverViewProps>
);
