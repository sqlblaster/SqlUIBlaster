import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import {
  ColumnSelectorOwnProps,
  ColumnSelectorProps,
  ColumnSelectorStateProps
} from './props';
import { getRootTableBranch } from './utils';
import { TableColumns } from './view';

export const initialLevel: 0 = 0;

export const ColumnSelector = connect<
  ColumnSelectorStateProps,
  {},
  ColumnSelectorOwnProps,
  State
>(({ selectedTable, tables }) => ({
  tableName: selectedTable && selectedTable.name,
  modelName: selectedTable && selectedTable.modelName,
  tables
}))((props: ColumnSelectorProps) => {
  const { tableName, modelName } = props;

  return (
    <div data-testid='column-selector'>
      { tableName && modelName ? (
        <TableColumns
          {...props}
          level={initialLevel}
          tableBranch={getRootTableBranch(tableName, modelName)}
        />
      ) : null }
    </div>
  );
});
