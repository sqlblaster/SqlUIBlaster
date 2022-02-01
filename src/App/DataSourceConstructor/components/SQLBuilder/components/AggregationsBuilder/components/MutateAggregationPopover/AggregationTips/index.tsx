import {
  createStyles,
  Tooltip,
  withStyles,
  WithStyles
} from '@material-ui/core';
import HelpIcon from '@material-ui/icons/HelpOutline';
import * as React from 'react';
import { AggregationOperator } from '../../../aggregations';
import { getTips } from './tips';

export const styles = () =>
  createStyles({
    maxWidthLimit: {
      maxWidth: 100
    }
  });

export interface AggregationTipsProps extends WithStyles<typeof styles> {
  operator: AggregationOperator;
}

export const AggregationTips = withStyles(styles)(
  ({ operator, classes: { maxWidthLimit } }: AggregationTipsProps) => {
    return (
      <>
        <Tooltip
          title={getTips(operator)}
          placement='bottom'
          classes={{ tooltip: maxWidthLimit }}
        >
          <HelpIcon style={{ color: '#C3C7CA', paddingLeft: '5px' }} />
        </Tooltip>
      </>
    );
  }
);
