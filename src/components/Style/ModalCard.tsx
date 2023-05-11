import styled from "styled-components";

const Style = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 11px 11px 19px -8px #000000c1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 600px;
  max-width: 600px;
  min-height: 5rem;
  overflow: hidden;
  width: 100%;
`;

export default function ModalCard(props: any) {
  return <Style {...props} />;
}
