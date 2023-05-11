import styled, { keyframes } from "styled-components";

const charging = keyframes`
  to { border: 10px solid lightgray }
`;

const Style = styled.button`
  background: var(--color-1);
  border: 0;
  border-radius: 0.3rem;
  display: inline-block;
  color: white;
  cursor: pointer;
  height: 3rem;
  text-transform: uppercase;
  transition: all 0.3s;
  width: 100%;
  &:hover {
    opacity: 0.8;
    transition: all 0.3s;
  }
  &:disabled {
    background: lightgray;
    color: var(--color-1);
    opacity: 0.5;
  }
  &.loading {
    border: 1px solid lightgray;
    animation: ${charging} 1s linear infinite;
  }
`;

export default function Key(props: any) {
  return <Style {...props} />;
}
