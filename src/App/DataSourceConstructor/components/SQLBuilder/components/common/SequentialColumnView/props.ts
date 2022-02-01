import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { ColumnBranchFields } from '../ColumnSelector/ColumnItem/SelectedColumn.models';
import { SequentialColumnViewClassKeys } from './styles';

export type SequentialColumnViewProps = ColumnBranchFields &
  SequentialColumnViewConfigProps &
  ClassesProp<SequentialColumnViewClassKeys>;

export class SequentialColumnViewConfigProps {
  public isForeignColumn?: boolean;
  public prefix?: string = '';
  public noSpaceAfterPrefix?: boolean = false;
  public suffix?: string = '';
  public noSpaceBeforeSuffix?: boolean = false;
}
