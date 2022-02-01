import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/components/query-builder/store/models/State';
import { WithPopoverManagement } from '../../../common/WithPopoverManagement';
import {
  AddGroupingDispatchProps,
  AddGroupingProps,
  AddGroupingStateProps,
  AGMapDispatchToProps
} from './props';
import { AddGrouping as View } from './view';

export const AddGrouping = connect<
  AddGroupingStateProps,
  AddGroupingDispatchProps,
  {},
  State
>(
  ({ groupings }) => ({
    groupings
  }),
  AGMapDispatchToProps
)(
  class extends React.Component<AddGroupingProps> {
    public static ViewWithPopoverManagement = WithPopoverManagement(View);

    public render() {
      return (
        <AddGrouping.ViewWithPopoverManagement
          {...this.props}
        />
      );
    }
  }
);
