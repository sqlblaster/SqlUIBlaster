import { StyleRulesCallback } from '@material-ui/core';

export type SingleDateClassKeys = 'root';

export const singleDateStyles: StyleRulesCallback<
  SingleDateClassKeys
> = (theme) => ({
  root: {
    display: 'flex',
    padding: '10px',
    flexDirection: 'column',
    minWidth: 220
  }
});
