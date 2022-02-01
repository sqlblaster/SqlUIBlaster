import { ColumnBranch } from '../../../common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { Grouping } from '../GroupingItem/model';

export const filterGrouping = (
  columnBranch: ColumnBranch,
  groupings: Grouping[]
): boolean => !groupings.some(({ column }) => column && column.equals(columnBranch));
