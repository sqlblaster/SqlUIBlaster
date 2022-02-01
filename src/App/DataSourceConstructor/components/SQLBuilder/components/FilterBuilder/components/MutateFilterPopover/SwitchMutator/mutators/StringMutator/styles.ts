import { StyleRulesCallback } from '@material-ui/core';

export type StringMutatorClassKeys =
  | 'root'
  | 'common-padding'
  | 'title-and-operator'
  | 'title'
  | 'operator'
  | 'operands'
  | 'mutator-action'
  | 'CheckBox'
  | 'FormControlLabel'
  | 'label'
  | 'variable-item'
  | 'hr';

export const stringMutatorStyles: StyleRulesCallback<
  StringMutatorClassKeys
> = theme => ({
  root: {
    border: '1px solid #EBECED',
    borderRadius: '5px'
  },
  'common-padding': {
    padding: 10
  },
  'title-and-operator': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    marginRight: 20
  },
  operator: {},
  operands: {},
  'mutator-action': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px'
  },
  CheckBox: {
    padding: 0,
    fontSize: 12
  },
  FormControlLabel: {
    marginLeft: '0px'
  },
  label: {
    fontSize: 12
  },
  hr: {
    margin: '0px',
    background: '#EBECED',
    height: '1px',
    border: 'none'
  },
  'variable-item': {
    position: 'absolute'
  }
});
