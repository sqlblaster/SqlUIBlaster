import { StyleRulesCallback } from '@material-ui/core';

export type CoupleOperandsViewClassKeys = 'and';

export const coupleOperandsViewStyles: StyleRulesCallback<
  CoupleOperandsViewClassKeys
> = (theme) => ({
  and: {
    margin: 1,
    color: theme.palette.primary.main
  }
});
