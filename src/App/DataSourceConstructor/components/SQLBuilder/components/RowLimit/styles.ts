import { StyleRulesCallback } from '@material-ui/core';

export type RowLimitBuilderClassKeys = 'root' | 'title' | 'row-limits';

export const rowLimitBuilderStyles: StyleRulesCallback<
  RowLimitBuilderClassKeys
> = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '5px 0px'
  },
  title: {
    fontSize: '9px',
    color: '#77828d',
    textTransform: 'uppercase',
    paddingBottom: '5px'
  },
  'row-limits': {
    display: 'flex',
    '& > .row-limit:first-child': {
      borderTopLeftRadius: '5px',
      borderBottomLeftRadius: '5px'
    },
    '& > .row-limit:last-child': {
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px'
    }
  }
});
