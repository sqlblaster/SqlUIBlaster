import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { SQLBuilder } from './components/SQLBuilder';
import { SQLGenerator } from './components/SQLGenerator';
import { DataSourceConstructorViewProps } from './props';
import { queryBuilderStyles } from './styles';

export const DataSourceConstructor = withStyles(queryBuilderStyles)((({
  showQuery,
  classes: { root }
}) => {
  return (
    <div className={root}>
      <SQLBuilder />
      {showQuery ? <SQLGenerator /> : null}
    </div>
  );
}) as React.FC<DataSourceConstructorViewProps>);
