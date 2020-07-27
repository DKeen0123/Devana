import { DefaultTheme } from 'styled-components';

export type Color = 'brand' | 'dark';

export type Tone =
  | 'xlight'
  | 'light'
  | 'midlight'
  | 'base'
  | 'middark'
  | 'dark'
  | 'xdark';

export type ColorConfig = {
  [tone in Tone]: string;
};

export type ColorsConfig = {
  [color in Color]: ColorConfig;
};

export type ThemeName = 'brand';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: ThemeName;
    colors: ColorsConfig;
  }
}

export type ThemeInterface = DefaultTheme;
