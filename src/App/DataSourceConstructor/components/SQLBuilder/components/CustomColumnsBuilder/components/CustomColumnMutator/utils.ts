import { ColumnBranch } from '../../../common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { CustomColumn } from '../CustomColumnItem/model';

export const filterCustomColumn = (
  customColumnBranch: ColumnBranch,
  customColumns: CustomColumn[]
): boolean =>
  !customColumns.find(({ column }) => column.equals(customColumnBranch)) &&
  customColumnBranch !== customColumnBranch.lastColumn;
