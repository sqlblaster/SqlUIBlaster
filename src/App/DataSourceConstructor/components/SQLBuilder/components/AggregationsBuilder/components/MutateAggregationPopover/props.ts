import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { ColumnBranch } from '../../../common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { ColumnSelectorProps } from '../../../common/ColumnSelector/props';
import { PopoverPaperProps } from '../../../common/PopoverPaper';
import { AggregationOperator } from '../../aggregations';
import { Aggregation } from '../AggregationItem/model';
import { MutateAggregationPopoverClassKeys } from './styles';

export type MutateAggregationPopoverProps = {
  action: (aggregation: Aggregation) => void;
} & MutateAggregationPopoverCommonProps;

export type MutateAggregationPopoverState = {
  operator?: AggregationOperator;
} & Pick<ColumnSelectorProps, 'popoverPositionUpdater'>;

export type MutateAggregationPopoverCommonProps = {
  aggregation?: Aggregation;
} & PopoverPaperProps;

export type MutateAggregationPopoverViewProps = {
  column?: ColumnBranch;
  operator?: AggregationOperator;
  onColumnSelected: (column: ColumnBranch) => void;
  onOperatorSelected: (operator: AggregationOperator) => () => void;
  onBackClicked: () => void;
  canShowColumnBranch: ColumnSelectorProps['canShowColumnBranch'];
} & Pick<MutateAggregationPopoverState, 'popoverPositionUpdater'> &
  MutateAggregationPopoverCommonProps &
  ClassesProp<MutateAggregationPopoverClassKeys>;
