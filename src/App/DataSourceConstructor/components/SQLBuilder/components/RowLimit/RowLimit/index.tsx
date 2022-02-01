import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { RowLimitBuilderState } from '../redux/state';
import { RowLimitClassKeys, rowLimitStyles } from './styles';

export type RowLimitProps = {
  rowLimit: RowLimitBuilderState['rowLimit'];
  selectedRowLimit: RowLimitBuilderState['rowLimit'];
  onRowLimitChange: (rowLimit: RowLimitBuilderState['rowLimit']) => () => void;
} & ClassesProp<RowLimitClassKeys>;

export const RowLimit = withStyles(rowLimitStyles)((({
  rowLimit,
  selectedRowLimit,
  classes,
  onRowLimitChange
}) => {
  return (
    <div
      className={ `row-limit ${classes.root} ${
        selectedRowLimit === rowLimit ? classes.selected : ''
      }` }
      onClick={onRowLimitChange(rowLimit)}
    >
      {!rowLimit ? 'None' : rowLimit}
    </div>
  );
}) as React.FC<RowLimitProps>);
