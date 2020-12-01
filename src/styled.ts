// import original module declarations
import { DefaultTheme } from "styled-components";

// theme props
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: { main: string; contrast: string };
      secondary: { main: string; contrast: string };
      accent: { main: string; contrast: string };
    };
    text: {
      primary: string;
      secondary: string;
      accent: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: { main: "#7daf3f", contrast: "#ffffff" },
    secondary: { main: "#4d302b", contrast: "#ffffff" },
    accent: { main: "", contrast: "" },
  },
  text: {
    primary: "#1F1F1F",
    secondary: "#504E4E",
    accent: "#C4C4C4",
  },
};
