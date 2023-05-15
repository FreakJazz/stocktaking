import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles';
import { baseThemes } from './base-theme';
import { ThemeOptions } from './colors';

export const createTheme = () => {
  let theme = createMuiTheme(baseThemes, ThemeOptions)
  return theme;
};
