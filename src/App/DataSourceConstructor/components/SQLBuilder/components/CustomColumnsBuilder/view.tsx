import { Typography, withStyles } from '@material-ui/core';
import * as React from 'react';
import { AddCustomColumn } from './components/AddCustomColumn';
import { CustomColumnItem } from './components/CustomColumnItem';
import { CustomColumnsBuilderViewProps } from './props';
import { customColumnsBuilderStyles } from './styles';

export const hiddenCustomColumnsText = `Can't add columns while there are aggregations or groupings`;

export const CustomColumnsBuilder = withStyles(customColumnsBuilderStyles)((({
  customColumns,
  aggregations,
  groupings,
  classes
}) => (
  <>
    {!(
      (aggregations && aggregations.length) ||
      (groupings && groupings.length)
    ) ? (
      <div className={classes.root}>
        {customColumns && customColumns.length ? (
          <div className={classes.customColumns}>
            {customColumns.map(customColumn => (
              <CustomColumnItem
                key={customColumn.id}
                customColumn={customColumn}
              />
            ))}
          </div>
        ) : null}
        <AddCustomColumn />
      </div>
    ) : (
      <Typography className={classes['no-column']}>
        {hiddenCustomColumnsText}
      </Typography>
    )}
  </>
)) as React.FC<CustomColumnsBuilderViewProps>);
