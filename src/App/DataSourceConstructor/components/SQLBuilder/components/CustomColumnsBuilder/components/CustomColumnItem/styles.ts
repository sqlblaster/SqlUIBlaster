import { StyleRulesCallback } from '@material-ui/core';

export type CustomColumnItemClassKeys = 'root' | 'customColumn-view';

export const customColumnItemStyles: StyleRulesCallback<
  CustomColumnItemClassKeys
> = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 2,
    borderRadius: '3px',
    transition: '0.3s',
    margin: '5px 0px'
  },
  'customColumn-view': {
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8
    },
    transition: '0.3s'
  }
});
