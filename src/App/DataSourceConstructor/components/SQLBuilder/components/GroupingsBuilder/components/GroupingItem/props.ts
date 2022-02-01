import { ClassesProp } from 'src/App/utils/classes-prop';
import { actionCreators, PickActionCreators } from 'src/store/action-creators';
import { PopoverManagerProps } from '../../../common/WithPopoverManagement';
import { Grouping } from './model';
import { GroupingItemClassKeys } from './styles';

export interface GroupingItemOwnProps {
  grouping: Grouping;
}

export type GroupingItemDispatchProps = PickActionCreators<
  'removeGrouping' | 'updateGrouping'
>;

export const GIMapDispatchToProps: GroupingItemDispatchProps = {
  removeGrouping: actionCreators.removeGrouping,
  updateGrouping: actionCreators.updateGrouping
};

export type GroupingItemProps = GroupingItemOwnProps &
  GroupingItemDispatchProps;

export type GroupingItemViewProps = {
  handleGroupingRemoval: (id: Grouping['id']) => () => void;
} & GroupingItemOwnProps &
  PopoverManagerProps &
  PickActionCreators<'updateGrouping'> &
  ClassesProp<GroupingItemClassKeys>;
