import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { PickStates } from 'src/components/query-builder/store/models/State';
import { ColumnItemDelegatedProp } from './ColumnItem/props';
import { ColumnBranch } from './ColumnItem/SelectedColumn.models';
import { TableColumnsClassKeys } from './styles';

export interface ColumnSelectorOwnProps {
  popoverPositionUpdater: (() => void) | undefined;
  canShowColumnBranch?: (columnBranch: ColumnBranch) => boolean;
  onColumnSelected: (column: ColumnBranch) => void;
}

export type ColumnSelectorStateProps = PickStates<'tables'> & {
  tableName: string | null;
  modelName: string | null;
};

export type ColumnSelectorProps = ColumnSelectorStateProps &
  ColumnSelectorOwnProps;

export type TableColumnsDelegatedProps = ColumnSelectorOwnProps &
  Pick<ColumnSelectorStateProps, 'tables'>;

export type TableColumnsProps = {
  /**
   * This is columnBranch, only with tables' values declared
   */
  tableBranch: ColumnBranch;
} & Pick<ColumnSelectorStateProps, 'tableName'> &
  TableColumnsDelegatedProps &
  ColumnItemDelegatedProp &
  ClassesProp<TableColumnsClassKeys>;
