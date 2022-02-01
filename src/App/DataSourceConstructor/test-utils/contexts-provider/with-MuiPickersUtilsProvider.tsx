import * as MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import * as React from 'react';
import { ContextProviderApplicator } from '../configured-render';

export const WithMuiPickersUtilsProvider: ContextProviderApplicator = (children) => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    {children}
  </MuiPickersUtilsProvider>
);
