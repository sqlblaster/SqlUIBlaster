import { StyleRulesCallback } from '@material-ui/core';

export type MutateFilterPopoverClassKeys = 'mutate-filter' | 'title-component';

export const mutateFilterPopoverStyles: StyleRulesCallback<
  MutateFilterPopoverClassKeys
> = (theme) => ({
  'mutate-filter': {},
  'title-component': {
    display: 'flex',
    alignItems: 'center'
  }
});
