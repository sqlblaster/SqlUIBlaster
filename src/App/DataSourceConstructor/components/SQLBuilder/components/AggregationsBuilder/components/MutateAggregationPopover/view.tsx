import { List, ListItem, ListItemText, withStyles } from '@material-ui/core';
import * as React from 'react';
import { ColumnSelector } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/common/ColumnSelector';
import { BackButton } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/common/Icons/BackButton';
import { PopoverPaper } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/common/PopoverPaper';
import { aggregationOperators } from '../../aggregations';
import { Aggregation } from '../AggregationItem/model';
import { AggregationTips } from './AggregationTips';
import { MutateAggregationPopoverViewProps } from './props';
import { mutateAggregationPopoverStyles } from './styles';

export const MutateAggregationPopover = withStyles(
  mutateAggregationPopoverStyles
)((props => {
  const {
    column,
    operator,
    aggregation,
    popoverPositionUpdater,
    classes,
    onColumnSelected,
    onOperatorSelected,
    onBackClicked,
    canShowColumnBranch
  } = props;

  return (
    <PopoverPaper {...props}>
      <div className={classes.root}>
        {((aggregation &&
          Aggregation.hasNoColumn(operator || aggregation.operator)) ||
          !operator) && (
          <div className={classes['select-operator']}>
            <List component='nav' disablePadding={true}>
              {aggregationOperators.map(aggregationOperator => (
                <ListItem
                  key={aggregationOperator}
                  button={true}
                  selected={aggregationOperator === operator}
                  onClick={onOperatorSelected(aggregationOperator)}
                >
                  <ListItemText
                    inset={true}
                    primary={aggregationOperator}
                    style={{ padding: 0 }}
                  />
                  <AggregationTips operator={aggregationOperator} />
                </ListItem>
              ))}
            </List>
          </div>
        )}

        {operator &&
          !Aggregation.hasNoColumn(operator) &&
          ((aggregation && operator && column) || (operator && !column)) && (
            <>
              <div className={classes['title-component']}>
                <BackButton onClick={onBackClicked} />
                {`${operator}...`}
              </div>
              <hr className={classes.hr} />
              <ColumnSelector
                popoverPositionUpdater={popoverPositionUpdater}
                canShowColumnBranch={canShowColumnBranch}
                onColumnSelected={onColumnSelected}
              />
            </>
          )}
      </div>
    </PopoverPaper>
  );
}) as React.FC<MutateAggregationPopoverViewProps>);
