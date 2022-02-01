import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/components/query-builder/store/models/State';
import {
  ITableSelectorHandlers,
  TableSelectorDispatchProps,
  TableSelectorProps,
  TableSelectorStateProps,
  TableSelectorViewProps as ViewProps,
  TSMapDispatchToProps
} from './props';
import { TableSelector as View } from './view';

export const TableSelector = connect<
  TableSelectorStateProps,
  TableSelectorDispatchProps,
  {},
  State
>(
  ({ tables, selectedTable }) => ({
    selectedTable,
    tables
  }),
  TSMapDispatchToProps
)(
  class extends React.Component<TableSelectorProps>
    implements ITableSelectorHandlers {

    public handleTableSelection: ViewProps['handleTableSelection'] = event => {
      const { tables, selectedTable, selectTable } = this.props;

      const modelName = event.target.value;

      if (!(selectedTable && modelName === selectedTable.name)) {
        const table = tables.find(t => t.modelName === modelName);
        table && selectTable(table);
      }
    }

    public render() {
      return (
        <View
          handleTableSelection={this.handleTableSelection}
          {...this.props}
        />
      );
    }
  }
);
