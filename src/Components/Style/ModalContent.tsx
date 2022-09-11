import styled from "styled-components";

const Style = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 1.5rem;
  overflow: auto;
  padding: 1rem;
`;

export default function ModalContent(props: any) {
  return <Style {...props} />;
}
