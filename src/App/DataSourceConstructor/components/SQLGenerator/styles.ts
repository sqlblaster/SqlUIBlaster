import { StyleRulesCallback } from '@material-ui/core';

export type SQLGeneratorClassKeys = 'root' | 'title' | 'query';

export const sqlGeneratorStyles: StyleRulesCallback<
  SQLGeneratorClassKeys
> = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    minWidth: 300
  },
  title: {
    fontWeight: 'bold',
    fontSize: '15px',
    color: '#33383E',
    margin: '5px 0px'
  },
  query: {
    width: '100%',
    whiteSpace: 'pre-wrap',
    padding: 20,
    border: '1px solid #E8EAEC',
    borderRadius: '3px',
    color: '#44484C',
    fontSize: '11px',
    fontFamily: 'monospace',
    background: '#F9FBFC'
  }
});
