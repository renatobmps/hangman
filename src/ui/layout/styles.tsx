import Link from 'next/link';
import Image from 'next/image';
import styled, { css } from 'styled-components';

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
  font: 600 1em "Eraser", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
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

export const Logo = styled(Image)`
  aspect-ratio: 1;
  display: block;
  height: calc(1rem * 4);
  width: auto;
`;

export const Navigation = styled.label`
  align-items: center;
  background: inherit;
  cursor: pointer;
  display: flex;
  gap: 0.5rem 0.25rem;
  position: relative;
  width: fit-content;
`;

export const NavigationButton = styled.input`
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

export const NavigationInner = styled.nav`
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

