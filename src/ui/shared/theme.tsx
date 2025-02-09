import { DefaultTheme, css } from "styled-components";

const theme: DefaultTheme = {
  font: {
    heading: {
      l: css`
        --heading-size: 4rem;

        font: 900 var(--heading-size) "Chawp", sans-serif;
        letter-spacing: 0.5em;
      `,
      m: css`
        --heading-size: 2.75rem;

        font: 800 var(--heading-size) "Chawp", sans-serif;
        letter-spacing: 0.5em;
      `,
      s: css`
        --heading-size: 1.5rem;

        font: 700 var(--heading-size) "Chawp", sans-serif;
        letter-spacing: 0.5em;
      `,
    },
    text: {
      l: css`
        --text-size: 1.25em;

        font: 600 var(--text-size) "Eraser",
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          sans-serif;
        letter-spacing: 0.5em;
      `,
      m: css`
      --text-size: 1em;

        font: 500 var(--text-size) "Eraser",
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          sans-serif;
        letter-spacing: 0.5em;
      `,
      s: css`
        --text-size: 0.75em;

        font: 400 var(--text-size) "Eraser",
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          sans-serif;
        letter-spacing: 0.5em;
      `,
    }
  },
  palette: {
    negative: {
      "100": "#CC0000",
      "200": "#B80000",
      "300": "#A30000",
      "400": "#8F0000",
      "500": "#7A0000",
      "600": "#660000",
      "700": "#520000",
      "800": "#3D0000",
      "900": "#290000"
    },
    neutral: {
      "100": "#F8F9FA",
      "200": "#E9ECEF",
      "300": "#DEE2E6",
      "400": "#CED4DA",
      "500": "#ADB5BD",
      "600": "#6C757D",
      "700": "#495057",
      "800": "#343A40",
      "900": "#212529",
    },
    positive: {
      "500": "#0f0"
    }
  }
}

export default theme;