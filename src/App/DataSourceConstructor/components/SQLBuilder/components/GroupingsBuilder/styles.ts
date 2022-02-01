import { StyleRulesCallback } from '@material-ui/core';

export type GroupingsBuilderClassKeys = 'root' | 'groupings';

export const groupingsBuilderStyles: StyleRulesCallback<
  GroupingsBuilderClassKeys
> = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  groupings: {
    marginRight: '10px',
    display: 'flex',
    flexWrap: 'wrap'
  }
});
