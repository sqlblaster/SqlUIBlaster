import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/components/query-builder/store/models/State';
import { Grouping } from '../GroupingItem/model';
import {
  MutateGroupingPopoverOwnProps,
  MutateGroupingPopoverProps,
  MutateGroupingPopoverState,
  MutateGroupingPopoverStateProps,
  MutateGroupingPopoverViewProps as ViewProps
} from './props';
import { filterGrouping } from './utils';
import { MutateGroupingPopover as View } from './view';

export const MutateGroupingPopover = connect<
  MutateGroupingPopoverStateProps,
  {},
  MutateGroupingPopoverOwnProps,
  State
>(({ groupings }) => ({ groupings }))(
  class extends React.Component<
    MutateGroupingPopoverProps,
    MutateGroupingPopoverState
  > {
    public state = { popoverPositionUpdater: undefined };

    public positionUpdaterCallback: ViewProps['positionUpdaterCallback'] = popoverPositionUpdater => {
      if (!this.state.popoverPositionUpdater) {
        this.setState({ popoverPositionUpdater });
      }
    }

    public handleColumnSelection: ViewProps['onColumnSelected'] = column => {
      const { action, grouping, onClose } = this.props;

      action(new Grouping(grouping ? grouping : {}, { column }));

      onClose();
    }

    public canShowColumnBranch: ViewProps['canShowColumnBranch'] = columnBranch => {
      const { groupings } = this.props;

      return filterGrouping(columnBranch, groupings);
    }

    public render() {
      return (
        <View
          {...this.props}
          popoverPositionUpdater={this.state.popoverPositionUpdater}
          positionUpdaterCallback={this.positionUpdaterCallback}
          onColumnSelected={this.handleColumnSelection}
          canShowColumnBranch={this.canShowColumnBranch}
        />
      );
    }
  }
);
