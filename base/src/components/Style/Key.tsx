import styled, { keyframes } from "styled-components";

const spinner = keyframes`
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export interface KeyProps {
  state: 'active' | 'loading' | 'used'
}

export const Key = styled.button<KeyProps>`
  background: ${p => p.state === 'active' ? 'var(--color-1)' : 'lightgray'};
  border: 0;
  border-radius: 0.3rem;
  display: inline-block;
  color: ${p => p.state === 'active' ? 'white' : 'var(--color-1)'};
  cursor: url(pencil.png), pointer;
  font-family: 'Eraser', sans-serif;
  font-size: 1.2rem;
  height: 3rem;
  text-transform: uppercase;
  transition: all 0.3s;
  width: 100%;
  &:hover {
    opacity: 0.8;
    transition: all 0.3s;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &.loading {
    border: 1px solid lightgray;
    color: transparent;
    cursor: wait;
    position: relative;
    &:before {
      animation: ${spinner} 1s linear infinite;
      content: '';
      border: 1px solid lightgray;
      border-bottom-color: transparent;
      border-radius: 50%;
      display: block;
      height: .8rem;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: .8rem;
    }
  }
`;

