import { palette } from './palette.js';

export const components = {
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: palette.divider,
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      '#root': {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      },
      main: {
        flex: 1,
      },
    },
  },
  MuiAppBar: {
    defaultProps: {
      color: 'inherit',
    },
    styleOverrides: {
      colorInherit: {
        backgroundColor: palette.background.paper,
        color: palette.text.primary,
      },
    },
  },
};
