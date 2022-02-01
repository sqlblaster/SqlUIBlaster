import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { ColumnBranch } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { RemoveButton } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/common/Icons/RemoveButton';
import { SequentialColumnView } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/common/SequentialColumnView';
import { MutateAggregationPopover } from '../MutateAggregationPopover';
import { AggregationItemViewProps } from './props';
import { aggregationItemStyles } from './styles';

export const AggregationItem = withStyles(aggregationItemStyles)(
  class extends React.Component<AggregationItemViewProps> {
    private readonly popoverLauncher: React.RefObject<HTMLDivElement>;

    constructor(props: AggregationItemViewProps) {
      super(props);
      this.popoverLauncher = React.createRef<HTMLDivElement>();
    }

    public render() {
      const {
        aggregation,
        updateAggregation,
        classes,
        isOpen,
        handleOpen,
        handleClose,
        handleAggregationRemoval
      } = this.props;

      const { id, operator, column } = aggregation;

      return (
        <>
          <div className={classes.root}>
            <div
              ref={this.popoverLauncher}
              onClick={handleOpen}
              className={classes['column-view']}
            >
              <SequentialColumnView
                prefix={operator}
                {...(column ? column : new ColumnBranch())}
              />
            </div>
            <RemoveButton onClick={handleAggregationRemoval(id)} />
          </div>
          { isOpen && (
            <MutateAggregationPopover
              isOpen={isOpen}
              anchorEl={this.popoverLauncher.current}
              action={updateAggregation}
              onClose={handleClose}
              aggregation={aggregation}
            />
          ) }
        </>
      );
    }
  }
);
