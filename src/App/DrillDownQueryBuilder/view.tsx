import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  withStyles
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as React from 'react';
import { FeaturedField } from '../DataSourceConstructor/components/SQLBuilder/components/common/FieldLabel';
import { CustomColumnsBuilder } from '../DataSourceConstructor/components/SQLBuilder/components/CustomColumnsBuilder';
import { OrdersBuilder } from '../DataSourceConstructor/components/SQLBuilder/components/OrdersBuilder';
import { RowLimitBuilder } from '../DataSourceConstructor/components/SQLBuilder/components/RowLimit';
import {
  customColumnsBuilderLabel,
  ordersBuilderLabel,
  rowLimitBuilderLabel
} from '../DataSourceConstructor/components/SQLBuilder/labels';
import { DrillDownQueryBuilderViewProps } from './props';
import { drillDownQueryBuilderStyles } from './styles';

export const DrillDownQueryBuilder = withStyles(drillDownQueryBuilderStyles)((({
  classes,
  enabled
}) => {
  return (
    <ExpansionPanel disabled={!enabled}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        classes={{
          root: classes['expansion-summary'],
          content: classes['expansion-summary-content'],
          expandIcon: classes['expansion-summary-icon']
        }}
      >
        <Typography variant='h6'>Drill down data source</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes['expansion-details']}>
        <FeaturedField label={customColumnsBuilderLabel}>
          <CustomColumnsBuilder />
        </FeaturedField>
        <FeaturedField label={ordersBuilderLabel}>
          <OrdersBuilder />
        </FeaturedField>
        <FeaturedField label={rowLimitBuilderLabel}>
          <RowLimitBuilder />
        </FeaturedField>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}) as React.FC<DrillDownQueryBuilderViewProps>);
