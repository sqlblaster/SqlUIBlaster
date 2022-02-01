import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import { WithPopoverManagement } from '../../../common/WithPopoverManagement';
import {
  GIMapDispatchToProps,
  GroupingItemDispatchProps,
  GroupingItemOwnProps,
  GroupingItemProps,
  GroupingItemViewProps as ViewProps
} from './props';
import { GroupingItem as View } from './view';

export const GroupingItem = connect<
  {},
  GroupingItemDispatchProps,
  GroupingItemOwnProps,
  State
>(
  null,
  GIMapDispatchToProps
)(
  class extends React.Component<GroupingItemProps> {
    public static ViewWithPopoverManagement = WithPopoverManagement(View);

    public handleGroupingRemoval: ViewProps['handleGroupingRemoval'] = (id) => () =>
      this.props.removeGrouping(id)

    public render() {
      return (
        <GroupingItem.ViewWithPopoverManagement
          handleGroupingRemoval={this.handleGroupingRemoval}
          {...this.props}
        />
      );
    }
  }
);
