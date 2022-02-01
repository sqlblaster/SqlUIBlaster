import { StyleRulesCallback } from '@material-ui/core';

export type FixedDatePickerClassKeys =
  | 'root'
  | 'add-time'
  | 'variables-picker-button';

export const fixedDatePickerStyles: StyleRulesCallback<
  FixedDatePickerClassKeys
> = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  'add-time': {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  'variables-picker-button': {
    marginRight: -7
  }
});
