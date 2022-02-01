import { Typography, withStyles } from '@material-ui/core';
import * as React from 'react';
import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { FeaturedFieldClassKeys, featuredFieldStyles } from './styles';

export type FeaturedFieldProps = {
  label?: string;
  disabled?: boolean;
} & ClassesProp<FeaturedFieldClassKeys>;

export const FeaturedField = withStyles(featuredFieldStyles)((({
  label = '',
  disabled = false,
  children,
  classes
}) => {
  return (
    <div className={classes.root}>
      {label && (
        <Typography variant='h6' className={classes.header}>
          {label}
        </Typography>
      )}
      {children}
      {disabled && (
        <div
          className={classes['disabled-layer']}
          data-testid='disabled-layer'
        />
      )}
    </div>
  );
}) as React.FC<FeaturedFieldProps>);
