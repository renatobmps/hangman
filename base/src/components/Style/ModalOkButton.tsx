import styled from "styled-components";

const Style = styled.button`
  background: var(--color-1);
  border: 0;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  padding: 0.5rem 1rem;
  margin: 1rem auto;
`;

export default function ModalOkButton(props: any) {
  return <Style {...props} />;
}
