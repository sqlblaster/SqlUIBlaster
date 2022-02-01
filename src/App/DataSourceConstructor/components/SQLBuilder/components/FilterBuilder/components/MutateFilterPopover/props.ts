import { ClassesProp } from 'src/App/utils/classes-prop';
import {
  actionCreators,
  PickActionCreators
} from 'src/store/action-creators';
import { PickStates } from 'src/store/models/State';
import { ColumnBranch } from '../../../common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { ColumnSelectorProps } from '../../../common/ColumnSelector/props';
import { PopoverPaperProps } from '../../../common/PopoverPaper';
import { Filter } from '../FilterItem/model';
import { MutateFilterPopoverClassKeys } from './styles';

export type MutateFilterPopoverOwnProps = {
  action: (filter: Filter) => void;
} & MutateFilterPopoverCommonProps;

export type MutateFilterPopoverState = {
  column?: ColumnBranch;
} & Pick<ColumnSelectorProps, 'popoverPositionUpdater'>;

export type IMutateFilterPopoverHandlers = {
  handleColumnSelection: ColumnSelectorProps['onColumnSelected'];
  handleBackClick: () => void;
  handleMutateButtonClick: () => void;
} & Pick<PopoverPaperProps, 'positionUpdaterCallback'>;

export type MutateFilterPopoverViewProps = {
  column?: ColumnBranch;
} & IMutateFilterPopoverHandlers &
  MutateFilterPopoverCommonProps &
  Pick<MutateFilterPopoverStateProps, 'canSaveFilter'> &
  Pick<MutateFilterPopoverState, 'popoverPositionUpdater'> &
  ClassesProp<MutateFilterPopoverClassKeys>;

export type MutateFilterPopoverCommonProps = {
  filter?: Filter;
} & PopoverPaperProps;

export type MutateFilterPopoverStateProps = PickStates<
  'operation' | 'canSaveFilter' | 'pickedVariables'
>;

export type MutateFilterPopoverDispatchProps = PickActionCreators<
  'setOperation' | 'setPickedVariables'
>;

const { setOperation, setPickedVariables } = actionCreators;
export const MFPMapDispatchToProps: MutateFilterPopoverDispatchProps = {
  setOperation,
  setPickedVariables
};

export type MutateFilterPopoverProps = MutateFilterPopoverOwnProps &
  MutateFilterPopoverStateProps &
  MutateFilterPopoverDispatchProps;
