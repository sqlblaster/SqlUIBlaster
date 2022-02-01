import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import { ContextProviderApplicator } from '../configured-render';

export const WithMuiThemeProvider: ContextProviderApplicator = children => (
  <MuiThemeProvider
    theme={createMuiTheme({
      props: {
        // Name of the component ⚛️
        MuiMenuItem: {
          // The properties to apply
          disableRipple: true, // No more ripple, on the whole application!
        },
      },
      transitions: {
        create: () => 'none'
      },
      typography: {
        useNextVariants: true,
      },
    })}
  >
    {children}
  </MuiThemeProvider>
);
