import { CollapseProps } from '@material-ui/core/Collapse';
import { Column } from 'src/components/query-builder/App/DataSourceConstructor/schemas';
import { TableColumnsDelegatedProps } from '../props';
import { ColumnBranch } from './SelectedColumn.models';

export type ColumnItemProps = Column &
TableColumnsDelegatedProps &
ColumnItemDelegatedProp & {
  columnBranch: ColumnBranch;
};

export interface IColumnItemHandlers {
  handleColumnClick: () => void;
  handleCollapsedStateChange: (event: React.MouseEvent) => void;
  handleCollapseEnter: CollapseProps['onEntered'];
  handleCollapseExit: CollapseProps['onExited'];
}

export type ColumnItemViewProps = ColumnItemProps & {
  collapsed: boolean;
} & IColumnItemHandlers;

export interface ColumnItemDelegatedProp {
  level: number;
}
