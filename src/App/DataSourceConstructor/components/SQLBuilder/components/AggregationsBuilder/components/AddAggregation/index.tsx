import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/components/query-builder/store/models/State';
import { WithPopoverManagement } from '../../../common/WithPopoverManagement';
import {
  AAMapDispatchToProps,
  AddAggregationDispatchProps,
  AddAggregationProps,
  AddAggregationStateProps
} from './props';
import { AddAggregation as View } from './view';

export const AddAggregation = connect<
  AddAggregationStateProps,
  AddAggregationDispatchProps,
  {},
  State
>(
  ({ aggregations }) => ({
    aggregations
  }),
  AAMapDispatchToProps
)(
  class extends React.Component<AddAggregationProps> {
    public static ViewWithPopoverManagement = WithPopoverManagement(View);

    public render() {
      const { aggregations, addAggregation } = this.props;

      return (
        <AddAggregation.ViewWithPopoverManagement
          aggregations={aggregations}
          addAggregation={addAggregation}
        />
      );
    }
  }
);
