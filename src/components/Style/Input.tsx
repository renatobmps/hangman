import styled from "styled-components";

const Style = styled.input`
  border: 0;
  border-bottom: 1px solid #0000005d;
  color: var(--color-1);
  padding: 0.5rem 0;
  &:focus {
    border-color: black;
    outline: none;
    &:invalid {
      border-color: red;
    }
  }
`;

export default function Input(props: any) {
  return <Style type="text" {...props} />;
}
