import { StyleRulesCallback } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export type SequentialColumnViewClassKeys =
  | 'prefix'
  | 'column'
  | 'column-icon-couple'
  | 'foreign-column'
  | 'suffix'
  | 'share-icon';

const commonStyles: (color: string) => CSSProperties = color => ({
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  margin: 1,
  color
});

export const sequentialColumnViewStyles: StyleRulesCallback<
  SequentialColumnViewClassKeys
> = theme => {
  const color = theme.palette.primary.main;

  return {
    prefix: commonStyles(color),
    column: commonStyles(color),
    'foreign-column': commonStyles(color),
    suffix: commonStyles(color),
    'share-icon': { ...commonStyles(color), fontSize: theme.typography.body2.fontSize },
    'column-icon-couple': {
      display: 'flex',
      alignItems: 'center'
    }
  };
};
