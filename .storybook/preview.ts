import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from '../src/ui/shared/theme';
import "../src/index.css";

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
    themes: {
      default: theme,
    },
    defaultTheme: "default",
    Provider: ThemeProvider,
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
