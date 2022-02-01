import { ClassesProp } from 'src/App/utils/classes-prop';
import { actionCreators, PickActionCreators } from 'src/store/action-creators';
import { PopoverManagerProps } from '../../../common/WithPopoverManagement';
import { BracketsProps } from './components/Brackets/props';
import { LogicOperatorSwitchProps } from './components/LogicOperatorSwitch/props';
import { Filter } from './model';
import { FilterItemClassKeys } from './styles';

export interface FilterItemOwnProps {
  index: number;
  filter: Filter;
}

export interface FilterItemStateProps {}

export interface FilterItemState {
  isMutatorOpen: boolean;
}

export type FilterItemDispatchProps = PickActionCreators<
  'removeFilter' | 'updateFilter'
>;

export const FIMapDispatchToProps: FilterItemDispatchProps = {
  removeFilter: actionCreators.removeFilter,
  updateFilter: actionCreators.updateFilter
};

export type FilterItemProps = FilterItemOwnProps &
  FilterItemStateProps &
  FilterItemDispatchProps;

export type FilterItemViewProps = {
  handleFilterRemoval: (id: Filter['id']) => () => void;
  handleLogicOperatorSwitch: LogicOperatorSwitchProps['onLogicOperatorSwitch'];
  handleBracketsCountChange: BracketsProps['onChange'];
} & FilterItemOwnProps &
  FilterItemStateProps &
  PopoverManagerProps &
  PickActionCreators<'updateFilter'> &
  ClassesProp<FilterItemClassKeys>;
