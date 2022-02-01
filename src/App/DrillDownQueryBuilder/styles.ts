import { StyleRulesCallback } from '@material-ui/core';

export type DrillDownQueryBuilderKeys =
  | 'expansion-summary'
  | 'expansion-summary-icon'
  | 'expansion-summary-content'
  | 'expansion-details';

export const drillDownQueryBuilderStyles: StyleRulesCallback<
  DrillDownQueryBuilderKeys
> = theme => ({
  'expansion-summary': {
    padding: `${theme.spacing.unit / 2}px 0px`,
    minHeight: '0px !important'
  },
  'expansion-summary-content': {
    margin: '0 !important'
  },
  'expansion-summary-icon': {
    right: `-${theme.spacing.unit}px`
  },
  'expansion-details': {
    display: 'flex',
    flexDirection: 'column',
    padding:  0
  }
});
