import { StyleRulesCallback } from '@material-ui/core';

export type BracketClassKeys = 'root' | 'bracket' | 'dashed';

export const bracketStyles: StyleRulesCallback<
  BracketClassKeys
> = (theme) => ({
  root: {
    cursor: 'pointer',
    opacity: 1,
    transition: '0.3s',
    height: '35px',
    width: '6px',
    '&:hover': {
      opacity: 0.5
    }
  },
  bracket: {
    stroke: 'black',
    strokeWidth: '3px',
    fill: 'none'
  },
  dashed: {
    opacity: 0.2,
    strokeDasharray: '8, 5'
  }
});
