import { StyleRulesCallback } from '@material-ui/core';

export type RemoveButtonClassKeys = 'root';

export const removeButtonStyles: StyleRulesCallback<
  RemoveButtonClassKeys
> = (theme) => ({
  root: {
    marginLeft: '5px',
    fontSize: '17px !important',
    fill: '#C8CED3 !important',
    opacity: 0.5,
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      opacity: 1
    }
  }
});
