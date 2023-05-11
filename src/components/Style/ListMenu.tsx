import styled from "styled-components";

const Style = styled.ul`
  list-style: none;
  button,
  a {
    background: transparent;
    border: 0;
    color: var(--color-1);
    cursor: pointer;
    display: block;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 300 !important;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    width: 100%;
    white-space: nowrap;
    &:hover {
      background: lightgray;
      opacity: 0.8;
    }
    &:visited {
      color: var(--color-1);
    }
  }
`;

export default function ListMenu(props: any) {
  return <Style {...props} />;
}
