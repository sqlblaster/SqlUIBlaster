import { SelectProps } from '@material-ui/core/Select';
import { Table } from 'src/components/query-builder/App/DataSourceConstructor/schemas';
import {
  actionCreators,
  PickActionCreators
} from 'src/components/query-builder/store/action-creators';
import { PickStates } from 'src/components/query-builder/store/models/State';

export type TableSelectorStateProps = PickStates<'selectedTable'> & {
  tables: Table[];
};

export type TableSelectorDispatchProps = PickActionCreators<'selectTable'>;

export const TSMapDispatchToProps: TableSelectorDispatchProps = {
  selectTable: actionCreators.selectTable
};

export type TableSelectorProps = TableSelectorStateProps &
  TableSelectorDispatchProps;

export interface ITableSelectorHandlers {
  handleTableSelection: SelectProps['onChange'];
}

export type TableSelectorViewProps = ITableSelectorHandlers &
  TableSelectorStateProps;
