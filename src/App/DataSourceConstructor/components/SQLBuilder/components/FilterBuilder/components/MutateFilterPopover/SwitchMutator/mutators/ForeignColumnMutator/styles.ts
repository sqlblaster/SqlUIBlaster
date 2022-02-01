import { StyleRulesCallback } from '@material-ui/core';

export type ForeignColumnMutatorClassKeys =
  | 'root'
  | 'common-padding'
  | 'title-and-operator'
  | 'title'
  | 'mutator-action'
  | 'hr';

export const foreignColumnMutatorStyles: StyleRulesCallback<
  ForeignColumnMutatorClassKeys
> = (theme) => ({
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
  'mutator-action': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '5px'
  },
  hr: {
    margin: '0px',
    background: '#EBECED',
    height: '1px',
    border: 'none'
  }
});
