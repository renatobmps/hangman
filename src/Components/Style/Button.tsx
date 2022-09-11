import styled from "styled-components";

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
`;

export default function Button(props: any) {
  return <Style type="button" {...props} />;
}
