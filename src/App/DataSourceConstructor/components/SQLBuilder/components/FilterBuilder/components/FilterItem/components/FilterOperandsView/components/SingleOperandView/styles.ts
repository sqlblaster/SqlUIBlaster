import { StyleRulesCallback } from '@material-ui/core';

export type SingleOperandViewClassKeys = 'root' | 'text';

export const singleOperandViewStyles: StyleRulesCallback<
  SingleOperandViewClassKeys
> = (theme) => ({
  root: {
    padding: '0px 3px',
    background: theme.palette.primary.main,
    borderRadius: '5px',
    margin: 1,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: theme.palette.common.white
  }
});
