import { StyleRulesCallback } from '@material-ui/core';

export type SQLGeneratorClassKeys = 'root' | 'title' | 'query';

export const sqlGeneratorStyles: StyleRulesCallback<
  SQLGeneratorClassKeys
> = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    border: '1px solid gray'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '15px',
    color: '#33383E',
    padding: '5px'
  },
  query: {
    whiteSpace: 'pre-wrap',
    padding: '15px',
    border: '1px solid #E8EAEC',
    borderRadius: '3px',
    color: '#44484C',
    fontSize: '11px',
    fontFamily: 'monospace',
    background: '#F9FBFC'
  }
});
