import { StyleRulesCallback } from '@material-ui/core';

export type FeaturedFieldClassKeys = 'root' | 'disabled-layer' | 'header';

export const featuredFieldStyles: StyleRulesCallback<FeaturedFieldClassKeys> = theme => ({
  root: {
    position: 'relative',
    marginTop: theme.spacing.unit * 2,
    padding: '5px 10px',
    display: 'flex',
    flexDirection: 'column'
  },
  'disabled-layer': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'white',
    opacity: 0.5,
    cursor: 'default'
  },
  header: {
    fontSize: 14,
  }
});
