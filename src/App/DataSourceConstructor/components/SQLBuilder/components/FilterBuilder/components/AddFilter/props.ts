import { actionCreators, PickActionCreators } from 'src/store/action-creators';
import { PickStates } from 'src/store/models/State';
import { PopoverManagerProps } from '../../../common/WithPopoverManagement';

export type AddFilterOwnProps = PopoverManagerProps;

export type AddFilterStateProps = PickStates<'filters'>;

export type AddFilterDispatchProps = PickActionCreators<'addFilter'>;

export const FBMapDispatchToProps: AddFilterDispatchProps = {
  addFilter: actionCreators.addFilter
};

export type AddFilterProps = AddFilterStateProps & AddFilterDispatchProps;

export type AddFilterViewProps = AddFilterOwnProps &
  AddFilterStateProps &
  AddFilterDispatchProps;
