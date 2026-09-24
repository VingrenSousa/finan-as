import "styled-components";

import theme from "../styles/theme";

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType {}
}