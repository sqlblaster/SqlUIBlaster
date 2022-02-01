import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { RowLimitBuilderViewProps } from './props';
import { rowLimits } from './row-limits';
import { RowLimit } from './RowLimit';
import { rowLimitBuilderStyles } from './styles';

export const RowLimitBuilder = withStyles(rowLimitBuilderStyles)((({
  rowLimit: selectedRowLimit,
  classes,
  onRowLimitChange
}) => (
  <div className={classes.root}>
    <div className={classes['row-limits']}>
      { rowLimits.map((rowLimit) => (
        <RowLimit
          key={rowLimit || 0}
          rowLimit={rowLimit}
          selectedRowLimit={selectedRowLimit}
          onRowLimitChange={onRowLimitChange}
        />
      )) }
    </div>
  </div>
)) as React.FC<RowLimitBuilderViewProps>);
