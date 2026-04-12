import type { Preview } from "@storybook/nextjs-vite";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from '../src/ui/shared/theme';
import "../src/styles/globals.css";
import "../src/styles/index.css";

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
    tags: ["autodocs"],
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
