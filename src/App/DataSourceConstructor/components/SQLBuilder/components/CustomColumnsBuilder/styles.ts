import { StyleRulesCallback } from '@material-ui/core';

export type CustomColumnsBuilderClassKeys =
  | 'root'
  | 'customColumns'
  | 'no-column';

export const customColumnsBuilderStyles: StyleRulesCallback<
  CustomColumnsBuilderClassKeys
> = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  customColumns: {
    marginRight: '10px',
    display: 'flex',
    flexWrap: 'wrap'
  },
  'no-column': {
    padding: '10px 5px',
    color: theme.palette.grey.A700
  }
});
