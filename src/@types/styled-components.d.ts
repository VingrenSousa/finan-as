import "styled-components";

import  { themeWhite } from "../styles/theme";

type ThemeType = typeof themeWhite;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType {}
}