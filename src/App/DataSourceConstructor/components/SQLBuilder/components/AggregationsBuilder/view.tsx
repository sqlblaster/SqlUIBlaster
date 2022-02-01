import { Typography, withStyles } from '@material-ui/core';
import * as React from 'react';
import { AddAggregation } from './components/AddAggregation';
import { AggregationItem } from './components/AggregationItem';
import { AggregationsBuilderViewProps } from './props';
import { aggregationsBuilderStyles } from './styles';

export const AggregationsBuilder = withStyles(aggregationsBuilderStyles)((({
  aggregations,
  classes
}) => (
  <div className={classes.root}>
    {aggregations && aggregations.length ? (
      <div className={classes.aggregations}>
        {aggregations.map((aggregation, index) => (
          <React.Fragment key={aggregation.id}>
            {index !== 0 && (
              <Typography variant='caption' className={classes['and-operator']}>
                and
              </Typography>
            )}
            <AggregationItem aggregation={aggregation} />
          </React.Fragment>
        ))}
      </div>
    ) : null}
    <AddAggregation />
  </div>
)) as React.FC<AggregationsBuilderViewProps>);
