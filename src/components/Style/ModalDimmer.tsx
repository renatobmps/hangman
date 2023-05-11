import styled from "styled-components";

const Style = styled.div`
  align-items: center;
  background: #0000007a;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`;

export default function ModalDimmer(props: any) {
  return <Style {...props} />;
}
