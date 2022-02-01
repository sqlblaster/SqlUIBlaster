import { StyleRulesCallback } from '@material-ui/core';

export type EmptyDateClassKeys = 'root';

export const emptyDateStyles: StyleRulesCallback<
  EmptyDateClassKeys
> = (theme) => ({
  root: {
    padding: 10
  }
});
