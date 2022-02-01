import { StyleRulesCallback } from '@material-ui/core';

export type TypeIconClassKeys = 'customIconType';

export const typeIconStyles: StyleRulesCallback<
  TypeIconClassKeys
> = (theme) => ({
  customIconType: {
    width: '12px',
    height: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#C8CED3',
    fontSize: '12px'
  }
});
