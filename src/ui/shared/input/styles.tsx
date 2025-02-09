import styled from "styled-components";

export const Container = styled.label<{ $checked: boolean }>`
  aspect-ratio: 1;
  background-color: ${({ $checked = false }) =>
    $checked ? "var(--color-1)" : "transparent"};
  box-shadow: inset 0 0 0 1px gray;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  display: grid;
  font-size: calc(var(--checkbox-size, 1rem) - 1px);
  height: var(--checkbox-size, 1rem);
  overflow: hidden;
  place-items: center;
`;

export const Checkbox = styled.input`
  display: none;

  &:checked ~ span {
    opacity: 1;
    visibility: visible;
  }
`

export const Checkmark = styled.span`
  color: inherit;
  font-size: inherit;
  opacity: 0;
  transition: 0.6s;
  visibility: hidden;
`;