import { StyleRulesCallback } from '@material-ui/core';

export type NearDateClassKeys =
  | 'near-date'
  | 'text-field'
  | 'shift-amount'
  | 'FormControlLabel'
  | 'label'
  | 'date-component';

export const nearDateStyles: StyleRulesCallback<
  NearDateClassKeys
> = (theme) => ({
  'near-date': {
    display: 'flex',
    padding: '10px'
  },
  'text-field': {
    margin: '0px 10px'
  },
  'shift-amount': {
    padding: '8px 5px',
    maxWidth: '40px',
    textAlign: 'center',
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: '0'
    },
  },
  FormControlLabel: {
    marginLeft: '0px',
    fontSize: '12px'
  },
  label: { fontSize: 12 },
  'date-component': { fontWeight: 'bold', fontSize: 12 }
});
