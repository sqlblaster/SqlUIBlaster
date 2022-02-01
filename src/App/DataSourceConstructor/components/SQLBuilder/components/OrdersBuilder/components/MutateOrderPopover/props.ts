import { PickStates } from 'src/components/query-builder/store/models/State';
import { ColumnBranch } from '../../../common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { ColumnSelectorProps } from '../../../common/ColumnSelector/props';
import { PopoverPaperProps } from '../../../common/PopoverPaper';
import { Order } from '../OrderItem/model';

export type MutateOrderPopoverOwnProps = {
  action: (order: Order) => void;
} & MutateOrderPopoverCommonProps;

export type MutateOrderPopoverCommonProps = {
  order?: Order;
} & PopoverPaperProps;

export type MutateOrderPopoverStateProps = PickStates<'groupings' | 'orders'>;

export type MutateOrderPopoverProps = MutateOrderPopoverOwnProps &
  MutateOrderPopoverStateProps;

export type MutateOrderPopoverViewProps = {
  column?: ColumnBranch;
  canShowColumnBranch: ColumnSelectorProps['canShowColumnBranch'];
  onColumnSelected: (column: ColumnBranch) => void;
} & Pick<MutateOrderPopoverState, 'popoverPositionUpdater'> &
  MutateOrderPopoverCommonProps &
  MutateOrderPopoverStateProps;

export type MutateOrderPopoverState = Pick<
  ColumnSelectorProps,
  'popoverPositionUpdater'
>;
