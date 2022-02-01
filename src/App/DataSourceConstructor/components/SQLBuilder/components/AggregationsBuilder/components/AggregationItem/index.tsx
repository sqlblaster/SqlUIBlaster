import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/components/query-builder/store/models/State';
import { WithPopoverManagement } from '../../../common/WithPopoverManagement';
import {
  AggregationItemDispatchProps,
  AggregationItemOwnProps,
  AggregationItemProps,
  AggregationItemViewProps as ViewProps,
  AIMapDispatchToProps
} from './props';
import { AggregationItem as View } from './view';

export const AggregationItem = connect<
  {},
  AggregationItemDispatchProps,
  AggregationItemOwnProps,
  State
>(
  null,
  AIMapDispatchToProps
)(
  class extends React.Component<AggregationItemProps> {
    public static ViewWithPopoverManagement = WithPopoverManagement(View);

    public handleAggregationRemoval: ViewProps['handleAggregationRemoval'] = (id) => () => {
      const { removeAggregation } = this.props;
      removeAggregation(id);
    }

    public render() {
      return (
        <AggregationItem.ViewWithPopoverManagement
          handleAggregationRemoval={this.handleAggregationRemoval}
          {...this.props}
        />
      );
    }
  }
);
