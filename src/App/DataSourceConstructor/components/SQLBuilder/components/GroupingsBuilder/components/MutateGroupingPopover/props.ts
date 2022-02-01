import { PickStates } from 'src/components/query-builder/store/models/State';
import { ColumnBranch } from '../../../common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { ColumnSelectorProps } from '../../../common/ColumnSelector/props';
import { PopoverPaperProps } from '../../../common/PopoverPaper';
import { Grouping } from '../GroupingItem/model';

export type MutateGroupingPopoverOwnProps = {
  action: (grouping: Grouping) => void;
} & MutateGroupingPopoverCommonProps;

export type MutateGroupingPopoverCommonProps = {
  grouping?: Grouping;
} & PopoverPaperProps;

export type MutateGroupingPopoverStateProps = PickStates<'groupings'>;

export type MutateGroupingPopoverProps = MutateGroupingPopoverOwnProps &
  MutateGroupingPopoverStateProps;

export type MutateGroupingPopoverViewProps = {
  column?: ColumnBranch;
  onColumnSelected: (column: ColumnBranch) => void;
  canShowColumnBranch: ColumnSelectorProps['canShowColumnBranch'];
} & Pick<ColumnSelectorProps, 'popoverPositionUpdater'> &
  MutateGroupingPopoverCommonProps &
  MutateGroupingPopoverStateProps;

export type MutateGroupingPopoverState = Pick<
  ColumnSelectorProps,
  'popoverPositionUpdater'
>;
