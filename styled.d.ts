import "styled-components";
import { css } from "styled-components";

type Colors = "neutral" | "positive" | "negative";

type Levels = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type HexColor = `#${number | string}`;

type Font = "text" | "heading";

type FontSize = "s" | "m" | "l";

declare module "styled-components" {
  export interface DefaultTheme {
    font: Record<Font, Record<FontSize, css>>;
    palette: {
      [C in Colors]: {
        [L in Levels]?: HexColor;
      };
    };
  }
}