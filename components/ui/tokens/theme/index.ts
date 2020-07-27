import { ThemeName, ThemeInterface } from './types';

import colors from '../colors';

const createThemeProvider = (themeName: ThemeName): ThemeInterface => {
  return {
    colors,
    name: themeName,
  };
};

export default createThemeProvider;
