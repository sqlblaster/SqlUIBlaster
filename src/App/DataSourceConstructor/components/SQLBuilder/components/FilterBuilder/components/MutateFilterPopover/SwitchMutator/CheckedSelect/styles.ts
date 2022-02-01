import { StyleRulesCallback } from '@material-ui/core';

export type CheckedSelectClassKeys =
  | 'checked-select'
  | 'has-border'
  | 'selected-item-value'
  | 'select-items'
  | 'item'
  | 'selected-item'
  | 'check-icon'
  | 'item-text';

export const checkedSelectStyles: StyleRulesCallback<
  CheckedSelectClassKeys
> = (theme) => ({
  'checked-select': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px 0px',
    cursor: 'pointer'
  },
  'has-border': {
    border: '1px solid #EBECED',
    borderRadius: '5px'
  },
  'selected-item-value': {
    marginLeft: '5px',
    color: theme.palette.primary.main
  },
  'select-items': {},
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    color: theme.palette.common.black,
    cursor: 'pointer',
    '&:hover': {
      background: theme.palette.primary.main,
      color: 'white'
    }
  },
  'selected-item': {
    color: theme.palette.primary.main
  },
  'check-icon': {
    color: 'inherit',
    marginRight: 5
  },
  'item-text': {
    color: 'inherit'
  }

});
