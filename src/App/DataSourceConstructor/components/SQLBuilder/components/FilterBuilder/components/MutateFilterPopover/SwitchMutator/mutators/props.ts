import { ColumnBranch } from '../../../../../common/ColumnSelector/ColumnItem/SelectedColumn.models';

export interface MutatorProps {
  column: ColumnBranch;
  titleComponent: JSX.Element;
  submitMutationComponent: JSX.Element;
}
