import { StyleRulesCallback } from '@material-ui/core';

export type CoupleDateClassKeys = 'root' | 'dates' | 'date';

export const coupleDateStyles: StyleRulesCallback<
  CoupleDateClassKeys
> = (theme) => ({
  root: {
    display: 'flex',
    padding: '10px',
    flexDirection: 'column'
  },
  dates: {
    display: 'flex',
    '& > div:first-child': {
      marginRight: 10
    }
  },
  date: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 166
  }
});
