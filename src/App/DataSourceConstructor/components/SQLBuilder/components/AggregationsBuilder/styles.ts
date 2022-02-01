import { StyleRulesCallback } from '@material-ui/core';

export type AggregationsBuilderClassKeys =
  | 'root'
  | 'aggregations'
  | 'and-operator';

export const aggregationsBuilderStyles: StyleRulesCallback<
  AggregationsBuilderClassKeys
> = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  aggregations: {
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  'and-operator': {
    padding: '5px'
  }
});
