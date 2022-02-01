import { StyleRulesCallback } from '@material-ui/core';

export type BracketsClassKeys = 'root';

export const bracketsStyles: StyleRulesCallback<
  BracketsClassKeys
> = (theme) => ({
  root: {
    display: 'flex',
    marginLeft: '3px',
    marginRight: '3px'
  }
});
