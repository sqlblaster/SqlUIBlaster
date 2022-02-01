import { List, Typography, withStyles } from '@material-ui/core';
import * as React from 'react';
import { ColumnItem } from './ColumnItem';
import { ColumnItemDelegatedProp } from './ColumnItem/props';
import { TableColumnsDelegatedProps, TableColumnsProps } from './props';
import { tableColumnsStyles } from './styles';
import { filterColumns, getNewColumnBranch, sortInOrderForeignColumnsBelow } from './utils';

export const TableColumns = withStyles(tableColumnsStyles)((props => {
  const {
    tableName,
    tables,
    tableBranch,
    level,
    popoverPositionUpdater,
    classes,
    onColumnSelected,
    canShowColumnBranch
  } = props;

  const table = tables.find(t => !!tableName && t.name === tableName.toLowerCase());
  let columns = table && table.columns;

  columns &&
    canShowColumnBranch &&
    (columns = filterColumns(columns, canShowColumnBranch, tableBranch));

  columns && (columns = sortInOrderForeignColumnsBelow(columns));

  const delegatedProps: ColumnItemDelegatedProp & TableColumnsDelegatedProps = {
    level,
    tables,
    popoverPositionUpdater,
    onColumnSelected,
    canShowColumnBranch
  };

  return (
    <div className={classes.root}>
      {columns && columns.length ? (
        <List component='nav' disablePadding={true}>
          {columns.map(column => (
            <ColumnItem
              key={column.name}
              {...column}
              foreignTableName={column.foreignTableName}
              {...delegatedProps}
              columnBranch={getNewColumnBranch(tableBranch, column)}
            />
          ))}
        </List>
      ) : (
        <Typography className={classes.noColumns} data-testid='no-columns'>
          No columns available...
        </Typography>
      )}
    </div>
  );
}) as React.FC<TableColumnsProps>);
