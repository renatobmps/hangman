import styled, { css } from "styled-components";
import { IGridStyle } from "./interfaces";

export const Grid = styled.div<IGridStyle>`
  align-items: stretch;
  box-sizing: border-box;
  display: grid;
  gap: var(--gap-v, 0.3rem) var(--gap-h, 0.3rem);
  grid-template-columns: repeat(auto-fill, calc(100% / var(--grid-quantity, 3) - (var(--gap-h, 0.3rem) - (var(--gap-h, 0.3rem) / var(--grid-quantity, 3)))));
  justify-items: stretch;
  padding: var(--grid-padding, 0);
  width: 100%;

  & > * {
    max-height: 100%;
    max-width: 100%;

    &:nth-child(1) {
      ${({ $use_highlight = false }) => {

    const mediaQuery = $use_highlight && css`
        @media (min-width: 1px) {
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 3;
        }
      `;

    return mediaQuery;
  }}
    }
  }
`;

export const DashboardGrid = styled.div`
  --grid-gap: 1rem;
  --grid-quantity: 7;
  --gap-h: var(--grid-gap);
  --gap-v: var(--grid-gap);

  width: 100%;

  @media (max-width: 1440px) { --grid-quantity: 6; --grid-gap: 0.75rem; }
  @media (max-width: 1024px) { --grid-quantity: 5; }
  @media (max-width: 768px) { --grid-quantity: 4; --grid-gap: 0.5rem; }
  @media (max-width: 425px) { --grid-quantity: 3; }
  @media (max-width: 375px) { --grid-quantity: 2; --grid-gap: 0.25rem; }
  @media (max-width: 320px) { --grid-quantity: 1; }
`