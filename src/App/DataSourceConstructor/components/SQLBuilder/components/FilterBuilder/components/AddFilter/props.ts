import { actionCreators, PickActionCreators } from 'src/components/query-builder/store/action-creators';
import { PickStates } from 'src/components/query-builder/store/models/State';
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
