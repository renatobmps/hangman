import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";

export const Root = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;
  width: min(100%, 100vw);
`;

export const NavigationMenu = css`
  background: transparent;
  border: none;
  border-radius: 0.5rem;
  color: black;
  cursor: pointer;
  font:
    600 1em "Eraser",
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
  letter-spacing: 0.2rem;
  text-decoration: none;
  transition: 0.6s;
  padding: 0.25rem 1rem;

  &:hover {
    background: #64646426;
  }
`;

export const NavigationMenuAsLink = styled(Link)`
  ${NavigationMenu}
`;

export const NavigationMenuAsButton = styled.button`
  ${NavigationMenu}
`;

export const Header = styled.header`
  align-items: center;
  background: white;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  padding: 1rem;
`;

export const LogoTop = styled(Image)`
  aspect-ratio: 1;
  display: block;
  height: calc(1rem * 4);
  width: auto;
`;

export const MenuNavigation = styled.label`
  align-items: center;
  background: inherit;
  cursor: pointer;
  display: flex;
  gap: 0.5rem 0.25rem;
  position: relative;
  width: fit-content;
`;

export const MenuNavigationButton = styled.input`
  & ~ svg {
    font-size: 1.2rem;

    @media (min-width: 615px) {
      display: none;
    }
  }

  &:checked ~ .navigation_inner {
    opacity: 1;
    visibility: visible;
  }
`;

export const MenuNavigationInner = styled.nav`
  background: inherit;
  display: inherit;
  gap: inherit;
  transition: 0.6s;

  @media (max-width: 615px) {
    flex-direction: column;
    inset: 100% 0 auto auto;
    opacity: 0;
    padding: 0.25rem;
    position: absolute;
    visibility: hidden;
    z-index: 100;

    box-shadow: 0px 3px 3px -1px gray;
  }
`;

export const DashboardPanel = styled.main`
  box-shadow: inset 0 4px 4px -3px rgba(0, 0, 0, 0.1);
  background: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 1rem;
`;

export const DashboardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DashboardSectionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Grid = styled.section`
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
      ${() => {
    const gridQuantity = getComputedStyle(document.documentElement).getPropertyValue('--grid-quantity') ?? '1';

    const mediaQuery = Number(gridQuantity) > 1 && css`
      @media (min-width: 1px) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
      }
    `

    return mediaQuery;
  }}
    }
  }
`;