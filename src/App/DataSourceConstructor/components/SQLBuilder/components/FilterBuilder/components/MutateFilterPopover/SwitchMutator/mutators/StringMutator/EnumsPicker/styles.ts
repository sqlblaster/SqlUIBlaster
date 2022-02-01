import { StyleRulesCallback } from '@material-ui/core';

export type EnumsPickerClassKeys = 'select' | 'variable-item' | 'form-control';

export const enumsPickerStyles: StyleRulesCallback<
  EnumsPickerClassKeys
> = theme => ({
  select: {
    minWidth: 0,
    paddingRight: 22
  },
  'form-control': {
    width: '100%'
  },
  'variable-item': {
    position: 'absolute'
  }
});
