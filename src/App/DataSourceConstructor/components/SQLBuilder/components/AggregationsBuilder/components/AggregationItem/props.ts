import { ClassesProp } from 'src/App/utils/classes-prop';
import { actionCreators, PickActionCreators } from 'src/store/action-creators';
import { PopoverManagerProps } from '../../../common/WithPopoverManagement';
import { Aggregation } from './model';
import { AggregationItemClassKeys } from './styles';

export interface AggregationItemOwnProps {
  aggregation: Aggregation;
}

export type AggregationItemDispatchProps = PickActionCreators<
  'removeAggregation' | 'updateAggregation'
>;

export const AIMapDispatchToProps: AggregationItemDispatchProps = {
  removeAggregation: actionCreators.removeAggregation,
  updateAggregation: actionCreators.updateAggregation
};

export type AggregationItemProps = AggregationItemOwnProps &
  AggregationItemDispatchProps;

export type AggregationItemViewProps = {
  handleAggregationRemoval: (id: Aggregation['id']) => () => void;
} & AggregationItemOwnProps &
  PopoverManagerProps &
  PickActionCreators<'updateAggregation'> &
  ClassesProp<AggregationItemClassKeys>;
