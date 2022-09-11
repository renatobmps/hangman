import styled from "styled-components";

const Style = styled.form`
  align-items: flex-end;
  background: white;
  border-radius: 0.8rem;
  box-shadow: 11px 11px 19px -8px #000000c1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  max-width: 500px;
  padding: 1rem;
  width: 100%;
`;

export default function LoginPanel(props: any) {
  return <Style {...props} />;
}
