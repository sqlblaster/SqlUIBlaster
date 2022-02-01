import { StyleRulesCallback } from '@material-ui/core';

export type MutateAggregationPopoverClassKeys =
  | 'root'
  | 'select-operator'
  | 'title-component'
  | 'hr';

export const mutateAggregationPopoverStyles: StyleRulesCallback<
  MutateAggregationPopoverClassKeys
> = (theme) => ({
  root: {},
  'select-operator': {},
  'title-component': {
    display: 'flex',
    alignItems: 'center',
    padding: '10px'
  },
  hr: {
    margin: '0px',
    background: '#EBECED',
    height: '1px',
    border: 'none'
  }
});
