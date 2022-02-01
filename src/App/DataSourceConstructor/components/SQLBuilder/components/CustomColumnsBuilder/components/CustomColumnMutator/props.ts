import { PickStates } from 'src/components/query-builder/store/models/State';
import { ColumnBranch } from '../../../common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { ColumnSelectorProps } from '../../../common/ColumnSelector/props';
import { PopoverPaperProps } from '../../../common/PopoverPaper';
import { CustomColumn } from '../CustomColumnItem/model';

export type CustomColumnMutatorOwnProps = {
  action: (customColumn: CustomColumn) => void;
} & CustomColumnMutatorCommonProps;

export type CustomColumnMutatorCommonProps = {
  customColumn?: CustomColumn;
} & PopoverPaperProps;

export type CustomColumnMutatorStateProps = PickStates<'customColumns'>;

export type CustomColumnMutatorProps = CustomColumnMutatorOwnProps &
  CustomColumnMutatorStateProps;

export type CustomColumnMutatorViewProps = {
  columnBranch?: ColumnBranch;
  onCustomColumnSelected: (customColumn: ColumnBranch) => void;
  canShowColumnBranch: ColumnSelectorProps['canShowColumnBranch'];
} & Pick<ColumnSelectorProps, 'popoverPositionUpdater'> &
  CustomColumnMutatorCommonProps &
  CustomColumnMutatorStateProps;

export type CustomColumnMutatorState = Pick<
  ColumnSelectorProps,
  'popoverPositionUpdater'
>;
