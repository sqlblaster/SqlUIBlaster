import { StyleRulesCallback } from '@material-ui/core';

export type AddEntityClassKeys = 'root' | 'text' | 'add-icon';

export const addEntityStyles: StyleRulesCallback<
  AddEntityClassKeys
> = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    margin: 2,
    marginLeft: 0,
    opacity: 0.5,
    transition: '0.3s',
    '&:hover': {
      opacity: 0.8
    }
  },
  text: {
    marginRight: '10px'
  },
  'add-icon': {
    fontSize: '18px',
    padding: '2px',
    margin: '0',
    borderRadius: '2px',
    border: `1px solid ${theme.palette.common.black}`
  }
});
