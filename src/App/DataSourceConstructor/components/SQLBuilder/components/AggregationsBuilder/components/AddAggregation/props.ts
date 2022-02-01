import { actionCreators, PickActionCreators } from 'src/components/query-builder/store/action-creators';
import { PickStates } from 'src/components/query-builder/store/models/State';
import { PopoverManagerProps } from '../../../common/WithPopoverManagement';

export type AddAggregationOwnProps = PopoverManagerProps;

export type AddAggregationStateProps = PickStates<'aggregations'>;

export type AddAggregationDispatchProps = PickActionCreators<'addAggregation'>;

export const AAMapDispatchToProps: AddAggregationDispatchProps = {
  addAggregation: actionCreators.addAggregation
};

export type AddAggregationProps = AddAggregationStateProps & AddAggregationDispatchProps;

export type AddAggregationViewProps = AddAggregationOwnProps &
  AddAggregationStateProps &
  AddAggregationDispatchProps;
