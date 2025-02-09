import styled, { keyframes } from "styled-components";

const spinner = keyframes`
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const Style = styled.button`
  background: var(--color-1);
  border: 0;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 0.5rem 1rem;
  width: ${(props: { width?: string }) => props.width || "fit-content"};
  &:disabled {
    filter: grayscale(0.5);
    opacity: 0.8;
  }
  &:hover {
    fill: hue-rotate(10deg);
  }
  &.loading {
    color: transparent;
    position: relative;
    &:before {
      animation: ${spinner} 1s linear infinite;
      content: "";
      display: block;
      width: 1rem;
      height: 1rem;
      border: 2px solid white;
      border-radius: 50%;
      border-bottom-color: transparent;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default function Button(props: any) {
  return <Style type="button" {...props} />;
}
