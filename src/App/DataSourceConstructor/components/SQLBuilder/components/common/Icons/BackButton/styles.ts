import { StyleRulesCallback } from '@material-ui/core';

export type BackButtonClassKeys = 'root';

export const backButtonStyles: StyleRulesCallback<
  BackButtonClassKeys
> = (theme) => ({
  root: {
    fontSize: '15px !important',
    fill: '#77828d !important',
    cursor: 'pointer',
    '&:hover': {
      fill: '#a28cc3 !important'
    }
  }
});
